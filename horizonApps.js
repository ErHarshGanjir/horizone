const horizonApps = [

    /*
    ============================================================
    ACTIVE EXAMPLE
    ============================================================
    */

    {
        name:
            "Example",

        iframeLink:
            "https://example.com",

        logo:
            "https://i.ibb.co/kgzJb34B/horizon-logo.png",

        description:
            "Example application. Replace this with your website.",

        enabled:
            1,

        hoverText:
            "Open Example",

        size:
            "large",

        password:
            ""
    },


    /*
    ============================================================
    PASSWORD PROTECTED
    ANY ONE PASSWORD WILL WORK
    ============================================================
    */

    {
        name:
            "Private Portal",

        iframeLink:
            "https://example.com/private",

        logo:
            "https://i.ibb.co/kgzJb34B/horizon-logo.png",

        description:
            "Private application protected by multiple passwords.",

        enabled:
            1,

        hoverText:
            "Unlock application",

        size:
            "normal",

        password:
            [
                "pass1",
                "pass2",
                "pass3"
            ]
    },


    /*
    ============================================================
    DISABLED CARD

    IMPORTANT:
    enabled: 0 DOES NOT REMOVE THE CARD.

    It remains visible in Bento Grid,
    but it cannot be clicked.
    ============================================================
    */

    {
        name:
            "Coming Soon",

        iframeLink:
            "https://example.com",

        logo:
            "https://i.ibb.co/kgzJb34B/horizon-logo.png",

        description:
            "This application is currently unavailable.",

        enabled:
            0,

        hoverText:
            "Currently disabled",

        size:
            "normal",

        password:
            ""
    },


    /*
    ============================================================
    GOOGLE
    ============================================================
    */

    {
        name:
            "Google",

        iframeLink:
            "https://www.google.com",

        logo:
            "https://www.google.com/favicon.ico",

        description:
            "Search the web quickly from Horizon.",

        enabled:
            1,

        hoverText:
            "Open Google",

        size:
            "normal",

        password:
            ""
    },


    /*
    ============================================================
    GITHUB
    ============================================================
    */

    {
        name:
            "GitHub",

        iframeLink:
            "https://github.com",

        logo:
            "https://github.githubassets.com/favicons/favicon.png",

        description:
            "Manage repositories, projects and code.",

        enabled:
            1,

        hoverText:
            "Open GitHub",

        size:
            "wide",

        password:
            ""
    },


    /*
    ============================================================
    GMAIL
    ============================================================
    */

    {
        name:
            "Gmail",

        iframeLink:
            "https://mail.google.com",

        logo:
            "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico",

        description:
            "Access your email and communication.",

        enabled:
            1,

        hoverText:
            "Open Gmail",

        size:
            "normal",

        password:
            ""
    },


    /*
    ============================================================
    GOOGLE DRIVE
    ============================================================
    */

    {
        name:
            "Drive",

        iframeLink:
            "https://drive.google.com",

        logo:
            "https://ssl.gstatic.com/images/branding/product/2x/drive_2020q4_48dp.png",

        description:
            "Access your cloud files and documents.",

        enabled:
            1,

        hoverText:
            "Open Drive",

        size:
            "tall",

        password:
            ""
    }

];
