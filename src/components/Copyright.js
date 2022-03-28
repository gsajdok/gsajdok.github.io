export const Copyright = () => {

    const copyrightList = [
        {
            item: "React logo",
            copyright: "Copyright (c) Facebook, Inc. and its affiliates.",
            link: "https://github.com/facebook/react/blob/main/LICENSE"
        },
        {
            item: "GitHub logo",
            copyright: "Copyright (c) GitHub, Inc.",
            link: "https://github.com/logos"
        },
        {
            item: "Javascript logo",
            copyright: "Copyright (c) 2011 Christopher Williams",
            link: "https://github.com/voodootikigod/logo.js/blob/1544bdeed/LICENSE"
        },
        {
            item: "LinkedIn logo",
            copyright: "Copyright (c) LinkedIn Corporation",
            link: "https://brand.linkedin.com/policies"
        },
        {
            item: "HTML5 and CSS3 logos",
            copyright: "daPhyre",
            link: "https://creativecommons.org/licenses/by/3.0/deed.en"
        },
    ]

    return (
        <div className="copyright_section">
            <div className="wrapper">
                <h2>Copyright</h2>
                <div className="copyrightList">
                    <ul>
                        {copyrightList.map((element, index) => {
                            return (
                                <ol key={index}>{element.item}, <a href={element.link}>{element.copyright}</a></ol>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
