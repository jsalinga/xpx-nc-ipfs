/**
 *
 * @author Pawel Rojek <pawel at pawelrojek.com>
 * @author Ian Reinhart Geiser <igeiser at devonit.com>
 *
 * This file is licensed under the Affero General Public License version 3 or later.
 *
 **/

 (function (OCA) {

    OCA.DrawIO = _.extend({}, OCA.Drawio);

    OCA.AppSettings = null;
    OCA.DrawIO.Mimes = [];

    if (!OCA.DrawIO.AppName) {
        OCA.DrawIO = {
            AppName: "drawio"
        };
    }

    OCA.DrawIO.EditFileNewWindow = function (filePath) {

        var ncClient = OC.Files.getClient();
        ncClient.getFileInfo(filePath)
        .then(function (status, fileInfo) {
            var url = OC.generateUrl("/apps/" + OCA.DrawIO.AppName + "/{fileId}", {
                fileId: fileInfo.id
            });
            // TODO: since we cannot edit more than one diagram per window maybe we need to just set the URL
            window.location.href = url
        })
        .fail(function (status) {
            console.log("Error: " + status);
            // TODO: show notification to user
        });
    }

    OCA.DrawIO.FileList = {
        attach: function (fileList) {
            if (fileList.id == "trashbin") {
                return;
            }

            $.get(OC.generateUrl("apps/" + OCA.DrawIO.AppName + "/ajax/settings"))
            .done(function (json) {
                OCA.AppSettings = json.settings;
                OCA.DrawIO.Mimes = json.formats;

                $.each(OCA.DrawIO.Mimes, function (ext, attr) {
                    fileList.fileActions.registerAction({
                        name: "drawioOpen",
                        displayName: t(OCA.DrawIO.AppName, "Open in Draw.io"),
                                                        mime: attr.mime,
                                                        permissions: OC.PERMISSION_READ | OC.PERMISSION_UPDATE,
                                                        icon: function () {
                                                            return OC.imagePath(OCA.DrawIO.AppName, "btn-edit");
                                                        },
                                                        iconClass: "icon-drawio-xml",
                                                        actionHandler: function (fileName, context) {
                                                            var dir = fileList.getCurrentDirectory();
                                                            OCA.DrawIO.EditFileNewWindow(OC.joinPaths(dir, fileName));
                                                        }
                    });

                    if ((fileList.fileActions.getDefaultFileAction(attr.mime, "file", OC.PERMISSION_READ) == false) || (OCA.AppSettings.overrideXml == "yes")) {
                        fileList.fileActions.setDefault(attr.mime, "drawioOpen");
                    }
                });
            })
            .fail(function () {
                //TODO: notify user of error
            });
        }
    };

    OCA.DrawIO.NewFileMenu = {
        attach: function (menu) {
            var fileList = menu.fileList;

            if (fileList.id !== "files") {
                return;
            }

            menu.addMenuEntry({
                id: "drawIoDiagram",
                displayName: t(OCA.DrawIO.AppName, "Diagram"),
                              templateName: t(OCA.DrawIO.AppName, "New Diagram.xml"),
                              iconClass: "icon-drawio-new-xml", //fileType: "x-application/drawio",
                              fileType: "xml",
                              actionHandler: function (fileName) {
                                  var dir = fileList.getCurrentDirectory();
                                  fileList.createFile(fileName)
                                  .then(function () {
                                      OCA.DrawIO.EditFileNewWindow(OC.joinPaths(dir, fileName));
                                  });
                              }
            });
        }
    };
})(OCA);

OC.Plugins.register("OCA.Files.FileList", OCA.DrawIO.FileList);
OC.Plugins.register("OCA.Files.NewFileMenu", OCA.DrawIO.NewFileMenu);

/*
 * A little bit of a hack - changing file icon...
 */
$(document)
.ready(function () {

    PluginDrawIO_ChangeIcons = function () {
        $("#filestable")
        .find("tr[data-type=file]")
        .each(function () {
            if (($(this)
                .attr("data-mime") == "application/xml") && ($(this)
                .find("div.thumbnail")
                .length > 0)) {
                if ($(this)
                    .find("div.thumbnail")
                    .hasClass("icon-drawio-xml") == false) {
                    $(this)
                    .find("div.thumbnail")
                    .addClass("icon icon-drawio-xml");
                    }
                }
        });
    };

    if ($('#filesApp')
        .val()) {

        $('#app-content-files')
        .add('#app-content-extstoragemounts')
        .on('changeDirectory', function (e) {
            if (OCA.AppSettings == null) return;
            if (OCA.AppSettings.overrideXml == "yes") {
                PluginDrawIO_ChangeIcons();
            }
        })
        .on('fileActionsReady', function (e) {
            if (OCA.AppSettings == null) return;
            if (OCA.AppSettings.overrideXml == "yes") {
                PluginDrawIO_ChangeIcons();
            }
        });
        }
});
