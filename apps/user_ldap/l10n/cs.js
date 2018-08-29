OC.L10N.register(
    "user_ldap",
    {
    "Failed to clear the mappings." : "Selhalo zrušení mapování.",
    "Failed to delete the server configuration" : "Nepodařilo se smazat nastavení serveru",
    "Invalid configuration: Anonymous binding is not allowed." : "Neplatná konfigurace: Anonymní navázání není povoleno.",
    "Valid configuration, connection established!" : "Nastavení je v pořádku a spojení bylo navázáno.",
    "Valid configuration, but binding failed. Please check the server settings and credentials." : "Konfigurace je v pořádku, ale spojení selhalo. Zkontrolujte prosím nastavení serveru a přihlašovací údaje.",
    "Invalid configuration. Please have a look at the logs for further details." : "Konfigurace je neplatná. Pro bližší informace se podívejte do logu.",
    "No action specified" : "Neurčena žádná akce",
    "No configuration specified" : "Neurčené žádné nastavení",
    "No data specified" : "Neurčena žádná data",
    " Could not set configuration %s" : "Nelze nastavit konfiguraci %s",
    "Action does not exist" : "Tato akce neexistuje",
    "LDAP user and group backend" : "Backend pro LDAP uživatele a skupiny",
    "Renewing …" : "Obnovování…",
    "Very weak password" : "Velmi slabé heslo",
    "Weak password" : "Slabé heslo",
    "So-so password" : "Přijatelné heslo",
    "Good password" : "Dobré heslo",
    "Strong password" : "Silné heslo",
    "The Base DN appears to be wrong" : "Base DN se nezdá být pořádku",
    "Testing configuration…" : "Testování konfigurace...",
    "Configuration incorrect" : "Nesprávná konfigurace",
    "Configuration incomplete" : "Nekompletní konfigurace",
    "Configuration OK" : "Konfigurace v pořádku",
    "Select groups" : "Vyberte skupiny",
    "Select object classes" : "Vyberte objektové třídy",
    "Please check the credentials, they seem to be wrong." : "Ověřte své přihlašovací údaje, zdají se být neplatné.",
    "Please specify the port, it could not be auto-detected." : "Uveďte prosím port, nelze ho automaticky detekovat.",
    "Base DN could not be auto-detected, please revise credentials, host and port." : "Base DN nelze automaticky detekovat, ověřte prosím přihlašovací údaje, host a port.",
    "Could not detect Base DN, please enter it manually." : "Nelze automaticky detekovat Base DN, zadejte prosím ručně.",
    "{nthServer}. Server" : "{nthServer}. Server",
    "No object found in the given Base DN. Please revise." : "V zadané Base DN nebyl objekt nalezen. Ověřte.",
    "More than 1,000 directory entries available." : "Je dostupných více než 1000 adresářů.",
    "An error occurred. Please check the Base DN, as well as connection settings and credentials." : "Došlo k chybě. Ověře prosím Base DN společně s nastavením připojení a přihlašovacími údaji.",
    "Do you really want to delete the current Server Configuration?" : "Opravdu si přejete smazat současné nastavení serveru?",
    "Confirm Deletion" : "Potvrdit smazání",
    "Mappings cleared successfully!" : "Mapování úspěšně vyčištěno!",
    "Error while clearing the mappings." : "Chyba při čištění mapování.",
    "Anonymous bind is not allowed. Please provide a User DN and Password." : "Anonymní bind není povolen. Zadejte prosím User DN a Heslo.",
    "LDAP Operations error. Anonymous bind might not be allowed." : "Chyba LDAP operace. Anonymní bind nejspíše není povolen.",
    "Saving failed. Please make sure the database is in Operation. Reload before continuing." : "Ukládání selhalo. Ujistěte se, že databáze funguje. Načtěte znovu, než budete pokračovat.",
    "Switching the mode will enable automatic LDAP queries. Depending on your LDAP size they may take a while. Do you still want to switch the mode?" : "Přepnutí režimu povolí automatické LDAP dotazy. V závislosti na velikosti vašeho LDAP může vyhledávání chvíli trvat. Opravdu si přejete přepnout mód?",
    "Mode switch" : "Přepnutí režimu",
    "Select attributes" : "Vyberte atributy",
    "User not found. Please check your login attributes and username. Effective filter (to copy-and-paste for command-line validation): <br/>" : "Uživatel nenalezen. Zkontrolujte prosím své přihlašovací údaje a jméno. Použitý filtr (pro zkopírování a ověření v příkazovém řádku): <br/>",
    "User found and settings verified." : "Uživatel nalezen a nastavení ověřeno.",
    "Consider narrowing your search, as it encompassed many users, only the first one of whom will be able to log in." : "Zvažte zúžení vyhledávání, protože současné zahrnuje mnoho uživatelů, ze kterých se bude schopen přihlásit pouze první.",
    "An unspecified error occurred. Please check log and settings." : "Došlo k nespecifikované chybě. Zkontrolujte prosím nastavení a soubor logu.",
    "The search filter is invalid, probably due to syntax issues like uneven number of opened and closed brackets. Please revise." : "Filtr vyhledávání je neplatný, pravděpodobně z důvodu chybné syntax jako třeba neuzavřené závorky. Ověřte to.",
    "A connection error to LDAP / AD occurred, please check host, port and credentials." : "Došlo k chybě připojení k LDAP / AD, zkontrolujte prosím host, port a přihlašovací údaje.",
    "The \"%uid\" placeholder is missing. It will be replaced with the login name when querying LDAP / AD." : "Zástupný symbol \"%uid\" chybí. Při dotatzu na LDAP / AD bude nahrazen přihlašovacím jménem.",
    "Please provide a login name to test against" : "Zadejte prosím přihlašovací jméno pro otestování",
    "The group box was disabled, because the LDAP / AD server does not support memberOf." : "Skupinové pole bylo vypnuto, protože LDAP / AD server nepodporuje memberOf.",
    "Password change rejected. Hint: " : "Změna hesla zamítnuta. Nápověda: ",
    "Please login with the new password" : "Prosím, přihlaste se pomocí nového hesla",
    "Your password will expire tomorrow." : "Vaše heslo zítra vyprší.",
    "Your password will expire today." : "Vaše heslo dnes vyprší.",
    "_Your password will expire within %n day._::_Your password will expire within %n days._" : ["Vaše heslo vyprší za %n den.","Vaše heslo vyprší za %n dny.","Vaše heslo vyprší za %n dní.","Vaše heslo vyprší za %n dní."],
    "LDAP / AD integration" : "LDAP / AD propojení",
    "_%s group found_::_%s groups found_" : ["nalezena %s skupina","nalezeny %s skupiny","nalezeno %s skupin","nalezeno %s skupin"],
    "_%s user found_::_%s users found_" : ["nalezen %s uživatel","nalezeni %s uživatelé","nalezeno %s uživatelů","nalezeno %s uživatelů"],
    "Could not detect user display name attribute. Please specify it yourself in advanced LDAP settings." : "Nelze detekovat atribut pro zobrazení jména uživatele. Upřesněte ho prosím sami v rozšířeném nastavení LDAP.",
    "Could not find the desired feature" : "Nelze nalézt požadovanou vlastnost",
    "Invalid Host" : "Neplatný hostitel",
    "Test Configuration" : "Vyzkoušet nastavení",
    "Help" : "Nápověda",
    "Groups meeting these criteria are available in %s:" : "Skupiny splňující tyto podmínky jsou k dispozici v %s:",
    "Only these object classes:" : "Pouze tyto třídy objektů:",
    "Only from these groups:" : "Pouze z těchto skupin:",
    "Search groups" : "Prohledat skupiny",
    "Available groups" : "Dostupné skupiny",
    "Selected groups" : "Vybrané skupiny",
    "Edit LDAP Query" : "Upravit LDAP požadavek",
    "LDAP Filter:" : "LDAP filtr:",
    "The filter specifies which LDAP groups shall have access to the %s instance." : "Filtr určuje, kteří uživatelé LDAP mají mít přístup k instanci %s.",
    "Verify settings and count the groups" : "Ověřit nastavení a spočítat skupiny",
    "When logging in, %s will find the user based on the following attributes:" : "Při přihlašování, %s bude hledat uživatele na základě následujících atributů:",
    "LDAP / AD Username:" : "LDAP / AD uživatelské jméno:",
    "Allows login against the LDAP / AD username, which is either \"uid\" or \"sAMAccountName\" and will be detected." : "Dovoluje přihlášení pomocí LDAP / AD uživatelského jména, což je \"uid\" nebo \"sAMAccountName\", což bude detekováno.",
    "LDAP / AD Email Address:" : "LDAP / AD e-mailová adresa:",
    "Allows login against an email attribute. \"mail\" and \"mailPrimaryAddress\" allowed." : "Povoluje přihlášení pomocí e-mailového atributu. Je povolen \"mail\" a \"mailPrimaryAddress\" allowed.",
    "Other Attributes:" : "Další atributy:",
    "Defines the filter to apply, when login is attempted. \"%%uid\" replaces the username in the login action. Example: \"uid=%%uid\"" : "Definuje filtr použitý při pokusu o přihlášení. %%uid je nahrazeno uživatelským jménem z přihlašovací akce. Příklad: \"uid=%%uid\"",
    "Test Loginname" : "Testovací přihlašovací jméno",
    "Verify settings" : "Ověřit nastavení",
    "1. Server" : "1. Server",
    "%s. Server:" : "%s. Server:",
    "Add a new configuration" : "Přidat novou konfiguraci",
    "Copy current configuration into new directory binding" : "Zkopírovat současnou konfiguraci do nového adresářového propojení",
    "Delete the current configuration" : "Smazat současnou konfiguraci",
    "Host" : "Počítač",
    "You can omit the protocol, unless you require SSL. If so, start with ldaps://" : "Pokud nevyžadujete SSL, můžete protokol vynechat. Pokud ano, začněte ldaps://",
    "Port" : "Port",
    "Detect Port" : "Detekovat port",
    "User DN" : "Uživatelské DN",
    "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty." : "DN klientského uživatele, ke kterému tvoříte vazbu, např. uid=agent,dc=example,dc=com. Pro anonymní přístup ponechte DN a heslo prázdné.",
    "Password" : "Heslo",
    "For anonymous access, leave DN and Password empty." : "Pro anonymní přístup ponechte údaje DN and heslo prázdné.",
    "Save Credentials" : "Uložit pověření",
    "One Base DN per line" : "Jedna základní DN na řádku",
    "You can specify Base DN for users and groups in the Advanced tab" : "V rozšířeném nastavení můžete určit základní DN pro uživatele a skupiny",
    "Detect Base DN" : "Detekovat Base DN",
    "Test Base DN" : "Test Base DN",
    "Avoids automatic LDAP requests. Better for bigger setups, but requires some LDAP knowledge." : "Zabraňuje automatickým LDAP požadavkům. Výhodné pro objemná nastavení, ale vyžaduje znalosti o LDAP.",
    "Manually enter LDAP filters (recommended for large directories)" : "Ručně vložit LDAP filtry (doporučeno pro obsáhlé adresáře)",
    "Listing and searching for users is constrained by these criteria:" : "Získávání a vyhledávání uživatelů je omezeno následujícími kritérii:",
    "The most common object classes for users are organizationalPerson, person, user, and inetOrgPerson. If you are not sure which object class to select, please consult your directory admin." : "Nejčastější třídy objektů pro uživatele jsou organizationalPerson, person, user a inetOrgPerson. Pokud si nejste jisti které třídy objektů zvolit, obraťte se na svého adresářového správce.",
    "The filter specifies which LDAP users shall have access to the %s instance." : "Filtr určuje, kteří uživatelé LDAP mají mít přístup k instanci %s.",
    "Verify settings and count users" : "Ověřit nastavení a spočítat uživatele",
    "Saving" : "Ukládá se",
    "Back" : "Zpět",
    "Continue" : "Pokračovat",
    "Please renew your password." : "Prosím, obnovte vaše heslo.",
    "An internal error occurred." : "Došlo k interní chybě.",
    "Please try again or contact your administrator." : "Zkuste to znovu, nebo kontaktujte vašeho administrátora.",
    "Current password" : "Aktuální heslo",
    "New password" : "Žádné heslo",
    "Renew password" : "Obnovit heslo",
    "Wrong password." : "Chybné heslo.",
    "Cancel" : "Zrušit",
    "Server" : "Server",
    "Users" : "Uživatelé",
    "Login Attributes" : "Přihlašovací atributy",
    "Groups" : "Skupiny",
    "Expert" : "Expertní",
    "Advanced" : "Pokročilé",
    "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it." : "<b>Varování:</b> není nainstalován LDAP modul pro PHP, podpůrná vrstva nebude fungovat. Požádejte prosím správce systému, aby jej nainstaloval.",
    "Connection Settings" : "Nastavení spojení",
    "Configuration Active" : "Nastavení aktivní",
    "When unchecked, this configuration will be skipped." : "Pokud není zaškrtnuto, bude toto nastavení přeskočeno.",
    "Backup (Replica) Host" : "Záložní (kopie) hostitel",
    "Give an optional backup host. It must be a replica of the main LDAP/AD server." : "Zadejte volitelného záložního hostitele. Musí to být kopie hlavního serveru LDAP/AD.",
    "Backup (Replica) Port" : "Záložní (kopie) port",
    "Disable Main Server" : "Zakázat hlavní server",
    "Only connect to the replica server." : "Připojit jen k záložnímu serveru.",
    "Turn off SSL certificate validation." : "Vypnout ověřování SSL certifikátu.",
    "Not recommended, use it for testing only! If connection only works with this option, import the LDAP server's SSL certificate in your %s server." : "Nedoporučuje se, určeno pouze k testovacímu použití. Pokud spojení funguje jen s touto volbou, importujte SSL certifikát vašeho LDAP serveru na server %s.",
    "Cache Time-To-Live" : "TTL vyrovnávací paměti",
    "in seconds. A change empties the cache." : "v sekundách. Změna vyprázdní vyrovnávací paměť.",
    "Directory Settings" : "Nastavení adresáře",
    "User Display Name Field" : "Pole zobrazovaného jména uživatele",
    "The LDAP attribute to use to generate the user's display name." : "LDAP atribut použitý k vytvoření zobrazovaného jména uživatele.",
    "2nd User Display Name Field" : "Druhé pole zobrazovaného jména uživatele",
    "Optional. An LDAP attribute to be added to the display name in brackets. Results in e.g. »John Doe (john.doe@example.org)«." : "Volitelné. Přidání LDAP atributu v závorkách k zobrazovanému jménu. Vypadá např. jako »John Doe (john.doe@example.org)«.",
    "Base User Tree" : "Základní uživatelský strom",
    "One User Base DN per line" : "Jedna uživatelská základní DN na řádku",
    "User Search Attributes" : "Atributy vyhledávání uživatelů",
    "Optional; one attribute per line" : "Volitelné, jeden atribut na řádku",
    "Group Display Name Field" : "Pole zobrazovaného jména skupiny",
    "The LDAP attribute to use to generate the groups's display name." : "LDAP atribut použitý k vytvoření zobrazovaného jména skupiny.",
    "Base Group Tree" : "Základní skupinový strom",
    "One Group Base DN per line" : "Jedna skupinová základní DN na řádku",
    "Group Search Attributes" : "Atributy vyhledávání skupin",
    "Group-Member association" : "Asociace člena skupiny",
    "Dynamic Group Member URL" : "URL člena dynamické skupiny",
    "The LDAP attribute that on group objects contains an LDAP search URL that determines what objects belong to the group. (An empty setting disables dynamic group membership functionality.)" : "LDAP atribut, který obsahuje pro skupinu objektů vyhledávací LDAP URL, která určuje které objekty patří do skupiny. (Prázdné nastavení vypne funkci člena dynamické skupiny.)",
    "Nested Groups" : "Vnořené skupiny",
    "When switched on, groups that contain groups are supported. (Only works if the group member attribute contains DNs.)" : "Pokud zapnuto, je možno používat skupiny, které obsahují jiné skupiny. (Funguje pouze pokud atribut člena skupiny obsahuje DN.)",
    "Paging chunksize" : "Velikost bloku stránkování",
    "Chunksize used for paged LDAP searches that may return bulky results like user or group enumeration. (Setting it 0 disables paged LDAP searches in those situations.)" : "Velikost bloku použitá pro stránkování vyhledávání v LDAP, které může vracet objemné výsledky jako třeba výčet uživatelů či skupin. (Nastavení na 0 zakáže stránkovaná vyhledávání pro tyto situace.)",
    "Enable LDAP password changes per user" : "Povolit změny LDAP hesla pro každého uživatele",
    "Allow LDAP users to change their password and allow Super Administrators and Group Administrators to change the password of their LDAP users. Only works when access control policies are configured accordingly on the LDAP server. As passwords are sent in plaintext to the LDAP server, transport encryption must be used and password hashing should be configured on the LDAP server." : "Povolit LDAP uživatelům změnu jejich hesla a povolit Super Administrátorům a skupinovým Administrátorům změnu hesel jejich LDAP uživatelů. Funguje pouze, pokud jsou na LDAP serveru příslušně nakonfigurovány seznamy řízení přístupu. Protože hesla jsou LDAP serveru zasílána v čisté podobě, musí být použito šifrování při transportu a na LDAP serveru by mělo být nakonfigurováno hashování hesel.",
    "(New password is sent as plain text to LDAP)" : "(Nové heslo je LDAPu zasláno jako prostý text)",
    "Default password policy DN" : "DN výchozí politiky hesel",
    "The DN of a default password policy that will be used for password expiry handling. Works only when LDAP password changes per user are enabled and is only supported by OpenLDAP. Leave empty to disable password expiry handling." : "DN výchozí politiky hesel, která bude použita ke zpracování vypršení hesel. Funguje pouze pokud jsou povoleny změny hesla uživatelem a používá se OpenLDAP. Ponechte prázdné pro výchozí zpracování vypršení hesel.",
    "Special Attributes" : "Speciální atributy",
    "Quota Field" : "Pole pro kvótu",
    "Leave empty for user's default quota. Otherwise, specify an LDAP/AD attribute." : "Ponechte prázné pro výchozí uživatelskou kvótu. Jinak uveďte LDAP / AD atribut.",
    "Quota Default" : "Výchozí kvóta",
    "Override default quota for LDAP users who do not have a quota set in the Quota Field." : "Přepsat výchozí kvótu pro LDAP uživatele, kteří nemají kvótu nastavenou v poli kvóty.",
    "Email Field" : "Pole e-mailu",
    "Set the user's email from their LDAP attribute. Leave it empty for default behaviour." : "Nastavit e-mail uživatele na základě LDAP atributu. Ponechte prázdné pro výchozí chování.",
    "User Home Folder Naming Rule" : "Pravidlo pojmenování domovského adresáře uživatele",
    "Leave empty for user name (default). Otherwise, specify an LDAP/AD attribute." : "Ponechte prázdné pro uživatelské jméno (výchozí). Jinak uveďte LDAP/AD parametr.",
    "Internal Username" : "Interní uživatelské jméno",
    "By default the internal username will be created from the UUID attribute. It makes sure that the username is unique and characters do not need to be converted. The internal username has the restriction that only these characters are allowed: [ a-zA-Z0-9_.@- ].  Other characters are replaced with their ASCII correspondence or simply omitted. On collisions a number will be added/increased. The internal username is used to identify a user internally. It is also the default name for the user home folder. It is also a part of remote URLs, for instance for all *DAV services. With this setting, the default behavior can be overridden. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users." : "Ve výchozím nastavení bude interní uživatelské jméno vytvořeno z atributu UUID. To zajišťuje, že je uživatelské jméno unikátní a znaky nemusí být převáděny. Interní uživatelské jméno má omezení, podle kterého jsou povoleny jen následující znaky [ a-zA-Z0-9_.@- ]. Ostatní znaky jsou nahrazeny jejich protějšky z ASCII nebo prostě vynechány. Při konfliktech bude přidáno/zvýšeno číslo. Interní uživatelské jméno slouží pro interní identifikaci uživatele. Je také výchozím názvem domovského adresáře uživatele. Je také součástí URL, např. pro služby *DAV. Tímto nastavením může být výchozí chování změněno. Ponechte jej prázdné, chcete-li zachovat výchozí nastavení. Změny se projeví pouze u nově namapovaných (přidaných) uživatelů LDAP.",
    "Internal Username Attribute:" : "Atribut interního uživatelského jména:",
    "Override UUID detection" : "Nastavit ručně UUID atribut",
    "By default, the UUID attribute is automatically detected. The UUID attribute is used to doubtlessly identify LDAP users and groups. Also, the internal username will be created based on the UUID, if not specified otherwise above. You can override the setting and pass an attribute of your choice. You must make sure that the attribute of your choice can be fetched for both users and groups and it is unique. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users and groups." : "Ve výchozím nastavení je UUID atribut nalezen automaticky. UUID atribut je používán pro nezpochybnitelnou identifikaci uživatelů a skupin z LDAP. Navíc je na základě UUID tvořeno také interní uživatelské jméno, pokud není nastaveno jinak. Můžete výchozí nastavení přepsat a použít atribut, který sami zvolíte. Musíte se ale ujistit, že atribut, který vyberete, bude uveden jak u uživatelů, tak i u skupin a je unikátní. Ponechte prázdné pro výchozí chování. Změna bude mít vliv jen na nově namapované (přidané) uživatele a skupiny z LDAP.",
    "UUID Attribute for Users:" : "UUID atribut pro uživatele:",
    "UUID Attribute for Groups:" : "UUID atribut pro skupiny:",
    "Username-LDAP User Mapping" : "Mapování uživatelských jmen z LDAPu",
    "Clear Username-LDAP User Mapping" : "Zrušit mapování uživatelských jmen LDAPu",
    "Clear Groupname-LDAP Group Mapping" : "Zrušit mapování názvů skupin LDAPu",
    " entries available within the provided Base DN" : "záznamů dostupných v zadané Base DN",
    "Wrong password. Reset it?" : "Chybné heslo. Resetovat?",
    "LDAP" : "LDAP",
    "<b>Warning:</b> Apps user_ldap and user_webdavauth are incompatible. You may experience unexpected behavior. Please ask your system administrator to disable one of them." : "<b>Varování:</b> Aplikace user_ldap a user_webdavauth jsou vzájemně nekompatibilní. Můžete zaznamenat neočekávané chování. Požádejte prosím svého správce systému o zakázání jedné z nich.",
    "Usernames are used to store and assign (meta) data. In order to precisely identify and recognize users, each LDAP user will have an internal username. This requires a mapping from username to LDAP user. The created username is mapped to the UUID of the LDAP user. Additionally the DN is cached as well to reduce LDAP interaction, but it is not used for identification. If the DN changes, the changes will be found. The internal username is used all over. Clearing the mappings will have leftovers everywhere. Clearing the mappings is not configuration sensitive, it affects all LDAP configurations! Never clear the mappings in a production environment, only in a testing or experimental stage." : "Uživatelská jména jsou používána pro uchovávání a přiřazování (meta)dat. Pro správnou identifikaci a rozpoznání uživatelů bude mít každý LDAP uživatel interní uživatelské jméno. To vyžaduje mapování uživatelských jmen na uživatele LDAP. Vytvořené uživatelské jméno je mapováno na UUID uživatele v LDAP. DN informace je navíc udržována v paměti pro snížení interakce s LDAP, ale není používána pro identifikaci. Pokud se DN změní, bude to správně rozpoznáno. Interní uživatelské jméno se používá celé. Vyčištění mapování zanechá zbytky všude. Vyčištění navíc není specifické pro každou konfiguraci, bude mít vliv na všechny LDAP konfigurace! Nikdy nečistěte mapování v produkčním prostředí, ale pouze v testovací nebo experimentální fázi."
},
"nplurals=4; plural=(n == 1 && n % 1 == 0) ? 0 : (n >= 2 && n <= 4 && n % 1 == 0) ? 1: (n % 1 != 0 ) ? 2 : 3;");
