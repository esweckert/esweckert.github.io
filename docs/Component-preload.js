//@ui5-bundle com/esweckert/profile/Component-preload.js
sap.ui.require.preload({
	"com/esweckert/profile/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent","./model/models","sap/ui/core/routing/History","sap/ui/Device","sap/ui/model/resource/ResourceModel"],function(e,i,t,o){"use strict";return e.extend("com.esweckert.profile.Component",{metadata:{manifest:"json",interfaces:["sap.ui.core.IAsyncContentCreation"]},init:function(){e.prototype.init.apply(this,arguments);this.setModel(i.createDeviceModel(),"device");this.getRouter().initialize()}})});
},
	"com/esweckert/profile/controller/App.controller.js":function(){
sap.ui.define(["./BaseController","sap/m/library"],function(e,t){"use strict";var n=t.PlacementType;var o=t.VerticalPlacementType;var r=t.ButtonType;return e.extend("com.esweckert.profile.controller.App",{onInit:function(){},onExit:function(){},onToHome:function(){this.getOwnerComponent().getTargets().display("home")},getBundleText:function(e,t){return this.getBundleTextByModel(e,this.getOwnerComponent().getModel("i18n"),t)}})});
},
	"com/esweckert/profile/controller/BaseController.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/routing/History","sap/ui/core/UIComponent"],function(e,t,o){"use strict";return e.extend("com.esweckert.profile.controller.BaseController",{getRouter:function(){return o.getRouterFor(this)},onNavBack:function(){var e,o;e=t.getInstance();o=e.getPreviousHash();if(o!==undefined){window.history.go(-1)}else{this.getRouter().navTo("home",{},true)}},getModel:function(e){return this.getView().getModel(e)},setModel:function(e,t){return this.getView().setModel(e,t)},getBundleTextByModel:function(e,t,o){return t.getResourceBundle().then(function(t){return t.getText(e,o)})}})});
},
	"com/esweckert/profile/controller/Contact.controller.js":function(){
sap.ui.define(["./BaseController"],function(e){"use strict";return e.extend("com.esweckert.profile.controller.Contact",{onInit:function(){},onToHome:function(){this.getOwnerComponent().getTargets().display("home")}})});
},
	"com/esweckert/profile/controller/Home.controller.js":function(){
sap.ui.define(["./BaseController","sap/ui/model/json/JSONModel","sap/ui/Device","com/esweckert/profile/model/formatter"],function(e,t,o,n){"use strict";return e.extend("com.esweckert.profile.controller.Home",{formatter:n,onInit:function(){var e=new t({isPhone:o.system.phone});this.setModel(e,"view");o.media.attachHandler(function(e){this.getModel("view").setProperty("/isPhone",e.name==="Phone")}.bind(this))},onToContact:function(){this.getOwnerComponent().getTargets().display("contact")},onToDataMigration:function(){this.getOwnerComponent().getTargets().display("dataMigration")}})});
},
	"com/esweckert/profile/controller/NotFound.controller.js":function(){
sap.ui.define(["./BaseController"],function(e){"use strict";return e.extend("com.esweckert.profile.controller.NotFound",{onInit:function(){},onToHome:function(){this.getOwnerComponent().getTargets().display("home")}})});
},
	"com/esweckert/profile/i18n/i18n.properties":'# This Is The Resource Bundle For The ToolPage App\r\n\r\n#XTIT: Application name\r\nappTitle=Thomas F Wecker\r\n\r\n#YDES: Application description\r\nappDescription=Page of T.F. Wecker\r\n\r\n#XIMG: ok go\r\nhomeImage=./images/homeImage\r\n\r\n#XTXT: Text for the learn about link\r\nlearnLink=Learn more\r\n\r\nfollowLinkedIn=Follow me on LinkedIn\r\n\r\nheaderTitle=How can I help?\r\n\r\nheaderContent=As your plug-and-play transformation advisor, I specialize in data migration, data management, and data related and data driven change management.\\n Think of me as an extension to your team, dedicated to helping you achieve your S/4HANA enabled business transformation, ensuring your data receives the attention it deserves.\r\n\r\n#XTOL: Tooltip for the learn more about administration link\r\nlearnDatamigrationTooltip=Learn more \\u00fcber Data Migration for SAP S/4 HANA\r\n\r\n#XTOL: Tooltip for the learn more about products link\r\nlearnDataqualityTooltip=Learn more \\u00fcber Data Quality Ensurance\r\n\r\n#XTOL: Tooltip for the learn more about revenue link\r\nlearnDatagovernanceTooltip=Learn more \\u00fcber data governance, why it\\u2019s important, how to start a data governance program, and data governance best practices.\r\n\r\n#XTOL: Tooltip for the learn more about social medial link\r\nlearnSocialMediaTooltip=Lernen Sie mehr \\u00fcber das Social-Media-Tool\r\n\r\n#XTIT: Title in the administration cell\r\ndatamigrationTitle=Data Migration \r\n\r\n#XTXT: Text in the administration cell\r\ndatamigrationContent=Data migration is a process which not only requires a high level of competence but also transparency. Thorough integration of data migration into the project and a clear migration approach is needed as well as collaboration and the exchange of knowledge. Since there is no \\u201cone fits all\\u201d solution for data migration a custom fit is necessary when tackling the complexity of transformation projects, and S/4HANA transformations in particular.\\n\r\n\r\n#XTIT: Title in the products cell\r\ndataqualityTitle=Data Quality\r\n\r\n#XTXT: Text in the products cell\r\ndataqualityContent=Emphasizing data as a top priority during S/4HANA implementation, alongside functional and business process considerations, is crucial. With more then two decades of experience in business transformation projects, I can ensure that your business does not get impacted due to poor data quality during an S/4HANA migration.\\n\\n\r\n\r\n#XTIT: Title in the revenue cell\r\ndatagovernanceTitle=Data Governance\r\n\r\n#XTXT: Text in the revenue cell\r\ndatagovernanceContent=Data Governance is an integral component of any organization\\u2019s data management strategy. It serves as the foundation upon which reliable, trustworthy, and applicable data is built. Its primary purpose is to ensure data quality, data privacy, compliance with regulations, and to make sure that data-driven decisions are reliable and can be trusted.\\n\\n\r\n\r\n#XTIT: Title in the social media cell\r\nsocialMediaTitle=Follow me\r\n\r\nbookMeeting=Book a meeting\r\n\r\n#XTXT: Text in the social media cell\r\nsocialMediaContent=Follow me on LinkedIn to get the latest news and informations!\r\n\r\n\r\n',
	"com/esweckert/profile/i18n/i18n_da.properties":'appTitle=Thomas F Wecker\nappDescription=Side f. T.F. Wecker\nhomeImage=./images/homeImage\nlearnLink=F\\u00e5 mere at vide\nfollowLinkedIn=F\\u00f8lg mig p\\u00e5 LinkedIn\nheaderTitle=Hvordan kan jeg hj\\u00e6lpe?\nheaderContent=Som din plug-and-play-transformationsr\\u00e5dgiver specialiserer jeg mig i datamigrering, datastyring og datarelateret og datadrevet forandringsledelse.\\n T\\u00e6nk p\\u00e5 mig som en udvidelse til dit team, der er dedikeret til at hj\\u00e6lpe dig med at opn\\u00e5 din SAP S/4HANA-aktiverede forretningstransformation og sikre, at dine data f\\u00e5r den opm\\u00e6rksomhed, de fortjener.\nlearnDatamigrationTooltip=F\\u00e5 mere at vide om datamigrering for SAP S/4 HANA\nlearnDataqualityTooltip=L\\u00e6s mere \\u00fcber Data Quality Ensurance\nlearnDatagovernanceTooltip=L\\u00e6r mere \\u00fcber data governance, hvorfor det er vigtigt, hvordan man starter en data governance program, og data governance bedste praksis.\nlearnSocialMediaTooltip=Lernen Sie mehr \\u00fcber das Social-Media-Tool\ndatamigrationTitle=Datamigrering\ndatamigrationContent=Datamigrering er en proces, der ikke blot kr\\u00e6ver et h\\u00f8jt kompetenceniveau, men ogs\\u00e5 gennemsigtighed. Der er behov for en n\\u00f8je integration af datamigrering i projektet og en klar migrationsstrategi samt samarbejde og udveksling af viden. Da der ikke er nogen "one fits all"-l\\u00f8sning til datamigrering, er et brugerdefineret fit n\\u00f8dvendigt, n\\u00e5r det g\\u00e6lder h\\u00e5ndtering af kompleksiteten af transformationsprojekter og is\\u00e6r S/4HANA-transformationer.\ndataqualityTitle=Datakvalitet\ndataqualityContent=Det er afg\\u00f8rende at fremh\\u00e6ve data som en topprioritet under SAP S/4HANA-implementering sammen med overvejelser vedr\\u00f8rende funktionelle processer og forretningsprocesser. Med mere end to \\u00e5rtiers erfaring med forretningstransformationsprojekter kan jeg sikre, at din forretning ikke p\\u00e5virkes p\\u00e5 grund af d\\u00e5rlig datakvalitet under en S/4HANA-migrering.\ndatagovernanceTitle=Data-governance\ndatagovernanceContent=Data Governance er en integreret komponent i enhver organisations datastyringsstrategi. Det fungerer som det grundlag, hvorp\\u00e5 p\\u00e5lidelige, p\\u00e5lidelige og relevante data er bygget. Dets prim\\u00e6re form\\u00e5l er at sikre datakvalitet, databeskyttelse, overholdelse af bestemmelser og at sikre, at datadrevne beslutninger er p\\u00e5lidelige og p\\u00e5lidelige.\nsocialMediaTitle=F\\u00f8lg mig\nbookMeeting=Reserver et m\\u00f8de\nsocialMediaContent=F\\u00f8lg mig p\\u00e5 LinkedIn for at f\\u00e5 de seneste nyheder og informationer\\!\n# This file is generated by SAP Translation Hub',
	"com/esweckert/profile/i18n/i18n_de.properties":'appTitle=Thomas F Wecker\nappDescription=Seite von T.F. Wecker\nhomeImage=./images/homeImage\nlearnLink=Weitere Informationen\nfollowLinkedIn=Folgen mir auf LinkedIn\nheaderTitle=Wie kann ich helfen?\nheaderContent=Als Plug-and-Play-Transformationsberater bin ich mich auf Datenmigration, Datenmanagement sowie datenbezogenes und datengesteuertes \\u00c4nderungsmanagement spezialisiert.\\n Betrachten Sie mich als eine Erweiterung Ihres Teams, der Ihr S/4HANA Transformation unterst\\u00fctzt, und sicherstellt, dass Ihre Daten die Aufmerksamkeit erhalten, die sie verdienen.\nlearnDataMigrationTooltip=Mehr \\u00fcber Datenmigration f\\u00fcr SAP S/4 HANA erfahren\nlearnDataQualityTooltip=Erfahren Sie mehr \\u00fcber Data Quality Ensurance\nlearnDataGovernanceTooltip=Erfahren Sie mehr \\u00fcber Data Governance, warum es wichtig ist, wie Sie ein Daten-Governance-Programm starten und Best Practices f\\u00fcr die Daten-Governance.\ndatamigrationTitle=Datenmigration\ndatamigrationContent=Die Datenmigration ist ein Prozess, der nicht nur ein hohes Ma\\u00df an Kompetenz, sondern auch Transparenz erfordert. Eine gr\\u00fcndliche Integration der Datenmigration in das Projekt und ein klarer Migrationsansatz sowie Zusammenarbeit und Wissensaustausch sind erforderlich. Da es keine \\u201eOne-fits-all\\u201c-L\\u00f6sung f\\u00fcr die Datenmigration gibt, ist eine kundenspezifische Anpassung erforderlich, um die Komplexit\\u00e4t von Transformationsprojekten und insbesondere S/4HANA-Transformationen zu bew\\u00e4ltigen.\ndataqualityTitle=Datenqualit\\u00e4t\ndataqualityContent=Daten als top Priorit\\u00e4t bei der Implementierung von SAP S/4HANA ist neben funktionalen Aspekten und Gesch\\u00e4ftsprozessen von entscheidender Bedeutung. Mit mehr als zwei Jahrzehnten Erfahrung in Transformationsprojekten trage ich dazu bei, dass Ihr Unternehmen w\\u00e4hrend einer S/4HANA-Migration nicht wegen mangelnder Datenqualit\\u00e4t beeintr\\u00e4chtigt wird.\\n\\n\ndatagovernanceTitle=Data Governance\ndatagovernanceContent=Data Governance ist ein integraler Bestandteil der Datenmanagementstrategie eines Unternehmens. Sie dient als Grundlage, auf der zuverl\\u00e4ssige, vertrauensw\\u00fcrdige und anwendbare Daten aufgebaut werden. Sein Hauptzweck besteht darin, die Datenqualit\\u00e4t, den Datenschutz und die Einhaltung von Vorschriften sicherzustellen und dazu beizutragen, dass datengest\\u00fctzte Entscheidungen zuverl\\u00e4ssig und vertrauensw\\u00fcrdig sind.\nsocialMediaTitle=Folgen Sie mir\nbookMeeting=Meeting buchen\nsocialMediaContent=Folgen Sie mir auf LinkedIn, um die neuesten Nachrichten und Informationen zu erhalten\\!\n# This file is generated by SAP Translation Hub',
	"com/esweckert/profile/i18n/i18n_en.properties":'# This Is The Resource Bundle For The ToolPage App\r\n\r\n#XTIT: Application name\r\nappTitle=Thomas F Wecker\r\n\r\n#YDES: Application description\r\nappDescription=Page of T.F. Wecker\r\n\r\n#XIMG: ok go\r\nhomeImage=./images/homeImage\r\n\r\n#XTXT: Text for the learn about link\r\nlearnLink=Learn more\r\n\r\nfollowLinkedIn=Follow me on LinkedIn\r\n\r\nheaderTitle=How can I help?\r\n\r\nheaderContent=As your plug-and-play transformation advisor, I specialize in data migration, data management, and data related and data driven change management.\\n Think of me as an extension to your team, dedicated to helping you achieve your S/4HANA enabled business transformation, ensuring your data receives the attention it deserves.\r\n\r\n#XTOL: Tooltip for the learn more about administration link\r\nlearnDatamigrationTooltip=Learn more \\u00fcber Data Migration for SAP S/4 HANA\r\n\r\n#XTOL: Tooltip for the learn more about products link\r\nlearnDataqualityTooltip=Learn more \\u00fcber Data Quality Ensurance\r\n\r\n#XTOL: Tooltip for the learn more about revenue link\r\nlearnDatagovernanceTooltip=Learn more \\u00fcber data governance, why it\\u2019s important, how to start a data governance program, and data governance best practices.\r\n\r\n#XTOL: Tooltip for the learn more about social medial link\r\nlearnSocialMediaTooltip=Lernen Sie mehr \\u00fcber das Social-Media-Tool\r\n\r\n#XTIT: Title in the administration cell\r\ndatamigrationTitle=Data Migration \r\n\r\n#XTXT: Text in the administration cell\r\ndatamigrationContent=Data migration is a process which not only requires a high level of competence but also transparency. Thorough integration of data migration into the project and a clear migration approach is needed as well as collaboration and the exchange of knowledge. Since there is no \\u201cone fits all\\u201d solution for data migration a custom fit is necessary when tackling the complexity of transformation projects, and S/4HANA transformations in particular.\\n\r\n\r\n#XTIT: Title in the products cell\r\ndataqualityTitle=Data Quality\r\n\r\n#XTXT: Text in the products cell\r\ndataqualityContent=Emphasizing data as a top priority during S/4HANA implementation, alongside functional and business process considerations, is crucial. With more then two decades of experience in business transformation projects, I can ensure that your business does not get impacted due to poor data quality during an S/4HANA migration.\\n\\n\r\n\r\n#XTIT: Title in the revenue cell\r\ndatagovernanceTitle=Data Governance\r\n\r\n#XTXT: Text in the revenue cell\r\ndatagovernanceContent=Data Governance is an integral component of any organization\\u2019s data management strategy. It serves as the foundation upon which reliable, trustworthy, and applicable data is built. Its primary purpose is to ensure data quality, data privacy, compliance with regulations, and to make sure that data-driven decisions are reliable and can be trusted.\\n\\n\r\n\r\n#XTIT: Title in the social media cell\r\nsocialMediaTitle=Follow me\r\n\r\nbookMeeting=Book a meeting\r\n\r\n#XTXT: Text in the social media cell\r\nsocialMediaContent=Follow me on LinkedIn to get the latest news and informations!\r\n\r\n\r\n',
	"com/esweckert/profile/i18n/i18n_fr.properties":'appTitle=Thomas F Wecker\nappDescription=Page de T.F. Wecker\nhomeImage=./images/homeImage\nlearnLink=Autres informations\nfollowLinkedIn=Suivez-moi sur LinkedIn\nheaderTitle=Que puis-je faire pour vous ?\nheaderContent=En tant que conseiller en transformation plug-and-play, je me sp\\u00e9cialise dans la migration des donn\\u00e9es, la gestion des donn\\u00e9es et la gestion des modifications li\\u00e9es aux donn\\u00e9es.\\n Pensez \\u00e0 moi comme une extension de votre \\u00e9quipe, d\\u00e9di\\u00e9e \\u00e0 vous aider \\u00e0 r\\u00e9aliser la transformation de votre entreprise bas\\u00e9e sur SAP S/4HANA, en veillant \\u00e0 ce que vos donn\\u00e9es re\\u00e7oivent l\'attention qu\'elle m\\u00e9rite.\nlearnDatamigrationTooltip=En savoir plus \\u00fcber Data Migration for SAP S/4 HANA\nlearnDataqualityTooltip=En savoir plus \\u00fcber Data Quality Ensurances\nlearnDatagovernanceTooltip=D\\u00e9couvrez plus de d\\u00e9tails sur la gouvernance des donn\\u00e9es, l\'importance de celle-ci, le lancement d\'un programme de gouvernance des donn\\u00e9es et les bonnes pratiques en mati\\u00e8re de gouvernance des donn\\u00e9es.\ndatamigrationTitle=Migration de donn\\u00e9es\ndatamigrationContent=La migration des donn\\u00e9es est un processus qui requiert non seulement un niveau \\u00e9lev\\u00e9 de comp\\u00e9tence, mais aussi de transparence. Une int\\u00e9gration approfondie de la migration des donn\\u00e9es dans le projet et une approche claire de la migration sont n\\u00e9cessaires, ainsi que la collaboration et l\'\\u00e9change de connaissances. \\u00c9tant donn\\u00e9 qu\'il n\'existe pas de solution unique pour la migration des donn\\u00e9es, une adaptation personnalis\\u00e9e est n\\u00e9cessaire pour g\\u00e9rer la complexit\\u00e9 des projets de transformation et des transformations SAP S/4HANA en particulier.\ndataqualityTitle=Qualit\\u00e9 des donn\\u00e9es\ndataqualityContent=Il est essentiel de mettre l\'accent sur les donn\\u00e9es en tant que priorit\\u00e9 absolue lors de l\'impl\\u00e9mentation de SAP S/4HANA, ainsi que sur les consid\\u00e9rations relatives aux processus fonctionnels et de gestion. Avec plus de deux d\\u00e9cennies d\'exp\\u00e9rience dans les projets de transformation d\'entreprise, je peux m\'assurer que votre entreprise ne soit pas impact\\u00e9e en raison de la mauvaise qualit\\u00e9 des donn\\u00e9es lors d\'une migration vers SAP S/4HANA.\ndatagovernanceTitle=Gouvernance des donn\\u00e9es\ndatagovernanceContent=La gouvernance des donn\\u00e9es fait partie int\\u00e9grante de la strat\\u00e9gie de gestion des donn\\u00e9es de toute organisation. Il sert de base \\u00e0 la cr\\u00e9ation de donn\\u00e9es fiables, fiables et applicables. Son objectif principal est de garantir la qualit\\u00e9, la confidentialit\\u00e9 et la conformit\\u00e9 des donn\\u00e9es aux r\\u00e9glementations, et de s\'assurer que les d\\u00e9cisions pilot\\u00e9es par les donn\\u00e9es sont fiables et fiables.\nsocialMediaTitle=Suivez-moi\nbookMeeting=R\\u00e9server une r\\u00e9union\nsocialMediaContent=Suivez-moi sur LinkedIn pour obtenir les derni\\u00e8res nouvelles et informations\\!\n# This file is generated by SAP Translation Hub',
	"com/esweckert/profile/i18n/i18n_no.properties":'appTitle=Thomas F Wecker\nappDescription=Side av T.F. Wecker\nhomeImage=./images/homeImage\nlearnLink=L\\u00e6r mer\nfollowLinkedIn=F\\u00f8lg meg p\\u00e5 LinkedIn\nheaderTitle=Hvordan kan jeg hjelpe?\nheaderContent=Som din r\\u00e5dgiver for plu-to-play-transformasjon spesialiserer jeg meg p\\u00e5 datamigrering, dataadministrasjon og datarelatert og datastyrt endringsstyring.\\n Tenk p\\u00e5 meg som en utvidelse av teamet ditt, dedikert til \\u00e5 hjelpe deg med \\u00e5 oppn\\u00e5 den S/4HANA-aktiverte forretningstransformasjonen, slik at dataene f\\u00e5r den oppmerksomheten de fortjener.\nlearnDatamigrationTooltip=L\\u00e6r mer \\u00fcber-datamigrering for SAP S/4 HANA\nlearnDataqualityTooltip=Finn ut mer \\u00fcber Data Quality Ensurance\nlearnDatagovernanceTooltip=L\\u00e6r mer \\u00fcber datastyring, hvorfor det er viktig, hvordan du starter et datastyringsprogram og beste praksis for datastyring.\ndatamigrationTitle=Datamigrering\ndatamigrationContent=Datamigrering er en prosess som ikke bare krever et h\\u00f8yt kompetanseniv\\u00e5, men ogs\\u00e5 \\u00e5penhet. Det er behov for en grundig integrering av datamigrering i prosjektet, og det er behov for en klar migreringstiln\\u00e6rming samt samarbeid og kunnskapsutveksling. Siden det ikke finnes noen l\\u00f8sning som passer alle for datamigrering, er det n\\u00f8dvendig med en egendefinert tilpasning n\\u00e5r kompleksiteten til transformasjonsprosjekter og spesielt S/4HANA-transformasjoner h\\u00e5ndteres.\ndataqualityTitle=Datakvalitet\ndataqualityContent=Det er avgj\\u00f8rende \\u00e5 fremheve data som en topprioritet under S/4HANA-implementering, sammen med funksjons- og forretningsprosesshensyn. Med mer enn to ti\\u00e5rs erfaring i forretningstransformasjonsprosjekter kan jeg sikre at virksomheten din ikke blir p\\u00e5virket p\\u00e5 grunn av d\\u00e5rlig datakvalitet under en S/4HANA-migrering.\ndatagovernanceTitle=Datagovernance\ndatagovernanceContent=Data Governance er en integrert komponent i enhver organisasjons datastyringsstrategi. Det fungerer som grunnlaget som p\\u00e5litelige, p\\u00e5litelige og relevante data er bygget p\\u00e5. Dens prim\\u00e6re form\\u00e5l er \\u00e5 sikre datakvalitet, personvern, overholdelse av forskrifter, og \\u00e5 sikre at datadrevne beslutninger er p\\u00e5litelige og kan stole p\\u00e5.\nsocialMediaTitle=F\\u00f8lg meg\nbookMeeting=Bestill et m\\u00f8te\nsocialMediaContent=F\\u00f8lg meg p\\u00e5 LinkedIn for \\u00e5 f\\u00e5 siste nytt og informasjon\\!\n# This file is generated by SAP Translation Hub',
	"com/esweckert/profile/i18n/i18n_sv.properties":'appTitle=Thomas F Wecker\nappDescription=Sida av T.F. Wecker\nhomeImage=./images/homeImage\nlearnLink=L\\u00e4r dig mer\nfollowLinkedIn=F\\u00f6lj mig p\\u00e5 LinkedIn\nheaderTitle=Hur kan jag hj\\u00e4lpa till?\nheaderContent=Som din plug-and-play-transformationsr\\u00e5dgivare \\u00e4r jag specialiserad p\\u00e5 datamigrering, datahantering och datarelaterad och datadriven \\u00e4ndringshantering.\\n T\\u00e4nk p\\u00e5 mig som en ut\\u00f6kning till ditt team, dedikerad till att hj\\u00e4lpa dig att genomf\\u00f6ra din S/4HANA-aktiverade aff\\u00e4rstransformation s\\u00e5 att dina data f\\u00e5r den uppm\\u00e4rksamhet de f\\u00f6rtj\\u00e4nar.\nlearnDatamigrationTooltip=L\\u00e4s mer \\u00fcber-datamigrering f\\u00f6r SAP S/4 HANA\nlearnDataqualityTooltip=L\\u00e4s mer \\u00fcber Datakvalitetsf\\u00f6rs\\u00e4kring\nlearnDatagovernanceTooltip=L\\u00e4s mer \\u00fcber datastyrning, varf\\u00f6r det \\u00e4r viktigt, hur du startar ett datastyrningsprogram och b\\u00e4sta praxis f\\u00f6r datastyrning.\nlearnSocialMediaTooltip=Lernen Sie mehr \\u00fcber das Social-Media-Tool\ndatamigrationTitle=Datamigrering\ndatamigrationContent=Datamigration \\u00e4r en process som inte bara kr\\u00e4ver en h\\u00f6g kompetensniv\\u00e5 utan ocks\\u00e5 \\u00f6ppenhet. Det beh\\u00f6vs en gedigen integration av datamigration i projektet och en tydlig migrationsmetod samt samverkan och kunskapsutbyte. Eftersom det inte finns n\\u00e5gon l\\u00f6sning som passar alla f\\u00f6r datamigrering \\u00e4r en anpassad anpassning n\\u00f6dv\\u00e4ndig f\\u00f6r att hantera komplexiteten hos transformationsprojekt, och s\\u00e4rskilt S/4HANA-transformationer.\ndataqualityTitle=Datakvalitet\ndataqualityContent=Det \\u00e4r viktigt att lyfta fram data som h\\u00f6gsta prioritet under S/4HANA-implementeringen, tillsammans med h\\u00e4nsyn till funktioner och verksamhetsfl\\u00f6den. Med mer \\u00e4n tv\\u00e5 decenniers erfarenhet av verksamhetsomvandlingsprojekt kan jag s\\u00e4kerst\\u00e4lla att din verksamhet inte p\\u00e5verkas p\\u00e5 grund av d\\u00e5lig datakvalitet vid S/4HANA-migrering.\ndatagovernanceTitle=Datastyrning\ndatagovernanceContent=Datastyrning \\u00e4r en integrerad del av en organisations datahanteringsstrategi. Det fungerar som den grund p\\u00e5 vilken tillf\\u00f6rlitliga, tillf\\u00f6rlitliga och till\\u00e4mpliga data byggs. Dess fr\\u00e4msta syfte \\u00e4r att s\\u00e4kerst\\u00e4lla datakvalitet, datasekretess, efterlevnad av f\\u00f6reskrifter och att se till att datadrivna beslut \\u00e4r tillf\\u00f6rlitliga och kan vara tillf\\u00f6rlitliga.\nsocialMediaTitle=F\\u00f6lj mig\nbookMeeting=Boka ett m\\u00f6te\nsocialMediaContent=F\\u00f6lj mig p\\u00e5 LinkedIn f\\u00f6r att f\\u00e5 de senaste nyheterna och informationerna\\!\n# This file is generated by SAP Translation Hub',
	"com/esweckert/profile/manifest.json":'{"_version":"1.21.0","sap.app":{"id":"com.esweckert.profile","type":"application","i18n":{"bundleUrl":"i18n/i18n.properties","fallbackLocale":"en","supportedLocales":["en","de","dk"]},"title":"{{appTitle}}","description":"{{appDescription}}","applicationVersion":{"version":"1.0.0"},"sourceTemplate":{"id":"@sap/ux-app-migrator:freestyle","version":"1.13.3","toolsId":"20e30ae6-d9db-4150-85a9-a1830db7dfd6"}},"sap.ui":{"technology":"UI5","deviceTypes":{"desktop":true,"tablet":true,"phone":true},"supportedThemes":["sap_hcb","sap_bluecrystal","sap_fiori_3","sap_horizon"]},"sap.ui5":{"rootView":{"viewName":"com.esweckert.profile.view.App","type":"XML","id":"app","async":true},"dependencies":{"minUI5Version":"1.30","libs":{"sap.m":{},"sap.suite.ui.microchart":{"lazy":true},"sap.tnt":{},"sap.ui.core":{},"sap.ui.layout":{},"sap.uxap":{}}},"contentDensities":{"compact":false,"cozy":false},"resources":{"css":[{"uri":"css/style.css"}]},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleUrl":"i18n/i18n.properties","async":true,"fallbackLocale":"en","supportedLocales":["en","de","dk"]}}},"routing":{"config":{"routerClass":"sap.m.routing.Router","controlId":"mainContents","viewType":"XML","controlAggregation":"pages","viewPath":"com.esweckert.profile.view","bypassed":{"target":"notFound"},"async":true},"routes":[{"pattern":"","name":"home","target":"home"},{"pattern":"dataMigration","name":"dataMigration","target":"dataMigration"},{"pattern":"dataQuality","name":"dataQuality","target":"dataQuality"},{"pattern":"dataGovernance","name":"dataGovernance","target":"dataGovernance"},{"pattern":"contact","name":"contact","target":"contact"},{"pattern":"notFound","name":"notFound","target":"notFound"}],"targets":{"home":{"viewId":"home","viewName":"Home"},"dataMigration":{"viewId":"dataMigration","viewName":"DataMigration"},"dataQuality":{"viewId":"dataQuality","viewName":"DataQuality"},"dataGovernance":{"viewId":"dataGovernance","viewName":"DataGovernance"},"contact":{"viewId":"contact","viewName":"Contact"},"notFound":{"viewId":"notFound","viewName":"NotFound","transition":"show"}}}}}',
	"com/esweckert/profile/model/formatter.js":function(){
sap.ui.define(["sap/base/strings/formatMessage"],function(s){"use strict";return{formatMessage:s,srcImageValue:function(s,e){if(s){e+="_small"}return e+".jpg"}}});
},
	"com/esweckert/profile/model/models.js":function(){
sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"com/esweckert/profile/view/App.view.xml":'<mvc:View height="100%"\n\tcontrollerName="com.esweckert.profile.controller.App"\n\txmlns="sap.m"\n\txmlns:mvc="sap.ui.core.mvc"\n\txmlns:tnt="sap.tnt"><tnt:ToolPage\n\t\tid="app"\n\t\t><tnt:header><tnt:ToolHeader><Image src="images/wecker_logo_1.jpg" decorative="false" tooltip="T.F. Wecker Logo" press="onToHome"></Image><Title\n\t\t\t\t\ttext="{i18n>appTitle}"\n\t\t\t\t\tlevel="H2"/><ToolbarSpacer/></tnt:ToolHeader></tnt:header><tnt:mainContents><App id="mainContents"/></tnt:mainContents></tnt:ToolPage></mvc:View>\n',
	"com/esweckert/profile/view/Contact.view.xml":'<mvc:View\n\theight="100%"\n\tcontrollerName="com.esweckert.profile.controller.contact"\n\txmlns:mvc="sap.ui.core.mvc"\n\txmlns="sap.m"><MessagePage showHeader="false"\n\t\t\t\t text="Let\'s chat"\n\t\t\t\t enableFormattedText="true"\n\t\t\t\t description="&lt;br&gt;&lt;strong&gt;E-Mail:&lt;/strong&gt;&lt;br&gt;\n\t\t\t\t \t\t\t\t&lt;a target=\'mailto:hej@wecker.dk\' &gt;hej@wecker.dk&lt;/a&gt;&lt;br&gt;&lt;br&gt;\n\n\t\t\t\t\t\t\t\t&lt;br&gt;&lt;strong&gt;Location&lt;/strong&gt;&lt;br&gt;\n\t\t\t\t\t\t\t\tCopenhagen, Munich&lt;br&gt;&lt;br&gt;"\n\t\t\t\t icon="sap-icon://discussion"><buttons><Button text="Back" press="onToHome"/></buttons></MessagePage></mvc:View>',
	"com/esweckert/profile/view/Home.view.xml":'<mvc:View\n\theight="99%"\n\tcontrollerName="com.esweckert.profile.controller.Home"\n\txmlns="sap.m"\n\txmlns:l="sap.ui.layout"\n\txmlns:core="sap.ui.core"\n\txmlns:mvc="sap.ui.core.mvc"><Page showHeader="false" showFooter="true" enableScrolling="true"><landmarkInfo><PageAccessibleLandmarkInfo\n\t\t\t\trootRole="Region"\n\t\t\t\trootLabel="{i18n>Home_rootLabel}"\n\t\t\t\tcontentRole="Main"\n\t\t\t\tcontentLabel="{i18n>Home_contentLabel}"/></landmarkInfo><l:BlockLayout\n\t\t\tid="BlockLayout"\n\t\t\tbackground="Default"><l:BlockLayoutRow><l:BlockLayoutCell class="sapUiNoContentPadding"><Image\n\t\t\t\t\t\tsrc="{\n\t\t\t\t\t\t\tparts: [{path:\'view>/isPhone\'}, {path:\'i18n>homeImage\'}],\n\t\t\t\t\t\t\tformatter: \'.formatter.srcImageValue\'\n\t\t\t\t\t\t}"\n\t\t\t\t\t\twidth="100%"\n\t\t\t\t\t\theight="100%"/></l:BlockLayoutCell></l:BlockLayoutRow><l:BlockLayoutRow><l:BlockLayoutCell \n\t\t\t\tbackgroundColorSet="ColorSet11"\n\t\t\t\t\tbackgroundColorShade="ShadeC"><Title\n\t\t\t\t\t\t\tid="headerTitle"\n\t\t\t\t\t\t\ttext="{i18n>headerTitle}"\n\t\t\t\t\t\t\tlevel="H2"\n\t\t\t\t\t\t\ttitleStyle="H2"\n\t\t\t\t\t\t\ttextAlign="Center"\n\t\t\t\t\t\t\tclass="sapUiTinyMarginTopBottom"\n\t\t\t\t\t\t\twidth="100%"/><Text\n\t\t\t\t\t\t\ttext="{i18n>headerContent}"\n\t\t\t\t\t\t\ttextAlign="Center"\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\tclass="sapUiTinyMarginBottom customTextSize"\n\t\t\t\t\t\t\twidth="100%"/></l:BlockLayoutCell></l:BlockLayoutRow><l:BlockLayoutRow><l:BlockLayoutCell\n\t\t\t\t\tbackgroundColorSet="ColorSet10"\n\t\t\t\t\tbackgroundColorShade="ShadeD"><l:VerticalLayout><core:Icon\n\t\t\t\t\t\t\tsrc="sap-icon://business-objects-mobile"\n\t\t\t\t\t\t\tsize="2.5rem"\n\t\t\t\t\t\t\tcolor="Default"/><Title\n\t\t\t\t\t\t\tid="datamigrationTile"\n\t\t\t\t\t\t\ttext="{i18n>datamigrationTitle}"\n\t\t\t\t\t\t\tlevel="H3"\n\t\t\t\t\t\t\ttitleStyle="H2"\n\t\t\t\t\t\t\tclass="sapUiTinyMarginTopBottom"></Title><Text\n\t\t\t\t\t\t\ttext="{i18n>datamigrationContent}"\n\t\t\t\t\t\t\tclass="sapUiTinyMarginBottom"/></l:VerticalLayout><l:VerticalLayout><Button\n\t\t\t\t\t\tid="MeetingButton1"\n\t\t\t\t\t\tclass="sapUiTinyMarginBeginEnd"\n\t\t\t\t\t\ticon="sap-icon://appointment-2"\n\t\t\t\t\t\ttype="Emphasized"\n\t\t\t\t\t\ttext="{i18n>bookMeeting}"\n\t\t\t\t\t\ttooltip="{i18n>learnDataMigrationTooltip}"/></l:VerticalLayout></l:BlockLayoutCell><l:BlockLayoutCell\n\t\t\t\t\tbackgroundColorSet="ColorSet10"\n\t\t\t\t\tbackgroundColorShade="ShadeA"><l:VerticalLayout><core:Icon\n\t\t\t\t\t\t\tsrc="sap-icon://validate"\n\t\t\t\t\t\t\tsize="2.5rem"\n\t\t\t\t\t\t\tcolor="Default"/><Title\n\t\t\t\t\t\t\tid="dataqualityTile"\n\t\t\t\t\t\t\ttext="{i18n>dataqualityTitle}"\n\t\t\t\t\t\t\tlevel="H3"\n\t\t\t\t\t\t\ttitleStyle="H2"\n\t\t\t\t\t\t\tclass="sapUiTinyMarginTopBottom"/><Text\n\t\t\t\t\t\t\ttext="{i18n>dataqualityContent}"\n\t\t\t\t\t\t\tclass="sapUiTinyMarginBottom"/><Button\n\t\t\t\t\t\tid="MeetingButton2"\n\t\t\t\t\t\tclass="sapUiTinyMarginBeginEnd"\n\t\t\t\t\t\ticon="sap-icon://appointment-2"\n\t\t\t\t\t\ttype="Emphasized"\n\t\t\t\t\t\ttext="{i18n>bookMeeting}"\n\t\t\t\t\t\ttooltip="{i18n>learnDataQualityTooltip}"/></l:VerticalLayout></l:BlockLayoutCell><l:BlockLayoutCell\n\t\t\t\t\tbackgroundColorSet="ColorSet10"\n\t\t\t\t\tbackgroundColorShade="ShadeD"><l:VerticalLayout><core:Icon\n\t\t\t\t\t\t\tsrc="sap-icon://official-service"\n\t\t\t\t\t\t\tsize="2.5rem"\n\t\t\t\t\t\t\tcolor="Default"/><Title\n\t\t\t\t\t\t\ttext="{i18n>datagovernanceTitle}"\n\t\t\t\t\t\t\tlevel="H3"\n\t\t\t\t\t\t\ttitleStyle="H2"\n\t\t\t\t\t\t\tclass="sapUiTinyMarginTopBottom"/><Text\n\t\t\t\t\t\t\ttext="{i18n>datagovernanceContent}"\n\t\t\t\t\t\t\tclass="sapUiTinyMarginBottom"/><Button\n\t\t\t\t\t\t\n\t\t\t\t\t\tid="MeetingButton3"\n\t\t\t\t\t\tclass="sapUiTinyMarginBeginEnd button"\n\t\t\t\t\t\ticon="sap-icon://appointment-2"\n\t\t\t\t\t\ttype="Emphasized"\n\t\t\t\t\t\ttext="{i18n>bookMeeting}"\n\t\t\t\t\t\ttooltip="{i18n>learnDatagovernanceTooltip}"/></l:VerticalLayout></l:BlockLayoutCell></l:BlockLayoutRow><l:BlockLayoutRow><l:BlockLayoutCell \n\t\t\t\tbackgroundColorSet="ColorSet11"\n\t\t\t\t\tbackgroundColorShade="ShadeC"><Title\n\t\t\t\t\t\t\tid="followMeTitle"\n\t\t\t\t\t\t\ttext="Follow me"\n\t\t\t\t\t\t\tlevel="H2"\n\t\t\t\t\t\t\ttitleStyle="H2"\n\t\t\t\t\t\t\ttextAlign="Center"\n\t\t\t\t\t\t\tclass="sapUiTinyMarginTopBottom"\n\t\t\t\t\t\t\twidth="100%"/></l:BlockLayoutCell></l:BlockLayoutRow><l:BlockLayoutRow><l:BlockLayoutCell\n\t\t\t\t\tbackgroundColorSet="ColorSet10"\n\t\t\t\t\tbackgroundColorShade="ShadeD"><l:HorizontalLayout class="center"><Image src="./images/twitter.png" width="40px"/><Title\n\t\t\t\t\t\t\tlevel="H3"\n\t\t\t\t\t\t\ttitleStyle="H2"\n\t\t\t\t\t\t\tclass="sapUiTinyMarginBegin"><Link text="Twitter" href="https://x.com/esweckert" target="_blank" /></Title></l:HorizontalLayout></l:BlockLayoutCell><l:BlockLayoutCell\n\t\t\t\t\tbackgroundColorSet="ColorSet10"\n\t\t\t\t\tbackgroundColorShade="ShadeA"><l:HorizontalLayout class="center"><Image src="./images/linkedin.png" width="40px"/><Title\n\t\t\t\t\t\t\tlevel="H3"\n\t\t\t\t\t\t\ttitleStyle="H2"\n\t\t\t\t\t\t\tclass="sapUiTinyMarginBegin"><Link text="LinkedIn" href="https://www.linkedin.com/in/esweckert" target="_blank" /></Title></l:HorizontalLayout></l:BlockLayoutCell></l:BlockLayoutRow></l:BlockLayout><content><Bar design="Footer"><contentLeft><Label text="© 2024. Thomas F Wecker. All rights reserved."/></contentLeft><contentMiddle><Label text="Handcrafted with"/><core:Icon\n\t\t\t\t\t\t\tsrc="sap-icon://heart"\n\t\t\t\t\t\t\tsize="1rem"\n\t\t\t\t\t\t\tcolor="red"/><Label text="and SAPUI5."/></contentMiddle><contentRight><Link text="Contact" \n\t\t\t\t\t\tpress="onToContact"/><Link text="Privacy" \n\t\t\t\t\t\thref="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"\n\t\t\t\t\t\ttarget="_blank"/></contentRight></Bar></content></Page></mvc:View>',
	"com/esweckert/profile/view/NotFound.view.xml":'<mvc:View\n\theight="100%"\n\tcontrollerName="com.esweckert.profile.controller.notFound"\n\txmlns:mvc="sap.ui.core.mvc"\n\txmlns="sap.m"><MessagePage showHeader="false"\n\t\t\t\t text="Your browser can\'t load this page properly."\n\t\t\t\t enableFormattedText="true"\n\t\t\t\t description="This page might not behave as expected because your browser isn\'t configured to load unsigned &lt;a target=\'_self\' &gt;third-party controls&lt;/a&gt;.&lt;br&gt;&lt;br&gt;Possible reasons:&lt;ul&gt;&lt;li&gt;Your current security settings prohibit running third party controls on this page.&lt;/li&gt;&lt;li&gt;You have blocked a publisher of one of the controls.&lt;/li&gt;&lt;/ul&gt;You can change your security settings to allow unsigned controls.However, &lt;strong&gt;installing unsigned controls from untrusted sources may harm your computer&lt;/strong&gt;."\n\t\t\t\t icon="sap-icon://message-warning"><buttons><Button text="Back" press="onToHome"/></buttons></MessagePage></mvc:View>'
});
//# sourceMappingURL=Component-preload.js.map
