<?php
    style("drawio", "settings");
    script("drawio", "settings");
?>
<div class="section section-drawio">
    <h2>Draw.io</h2>

    <p class="drawio-header"><?php p($l->t("Draw.io URL")) ?></p>
    <input id="drawioUrl" value="<?php p($_["drawioUrl"]) ?>" placeholder="https://<drawio-url>" type="text">

    <p class="drawio-header">
    <label for='theme'><?php p($l->t("Theme:")) ?></label>
    <select id="theme">
      <option value="kennedy"<?php if ($_["theme"]=="kennedy") echo ' selected'; ?>><?php p($l->t("Kennedy")) ?></option>
      <option value="atlas"<?php if ($_["theme"]=="atlas") echo ' selected'; ?>><?php p($l->t("Atlas")) ?></option>
    </select>
    </p>

    <p class="drawio-header">
    <label for='lang'><?php p($l->t("Language")) ?></label>
    <input id="lang" value="<?php p($_["lang"]) ?>" placeholder="<<?php p($l->t("auto or en,fr,de,es,ru,pl,zh,jp...")) ?>>" type="text">
    </p>

    <p class="drawio-header">
    <label for='overrideXml'><?php p($l->t("Associate XML files with Draw.io?")) ?>
    <select id="overrideXml">
      <option value="yes"<?php if ($_["overrideXml"]=="yes") echo ' selected'; ?>><?php p($l->t("Yes")) ?></option>
      <option value="no"<?php if ($_["overrideXml"]=="no") echo ' selected'; ?>><?php p($l->t("No")) ?></option>
    </select>
    </p>

    <br />
    <a id="drawioSave" class="button"><?php p($l->t("Save")) ?></a>
</div>