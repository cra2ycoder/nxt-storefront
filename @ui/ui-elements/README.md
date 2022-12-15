# @ui/contents

- Typography
  
  - `HeadingText` => <h1> to <h6>
  - `LinkText` => menus <a>
  - `ParagraphText` => <p> description, long content, disclaimers etc.,
  - `FormLabelText` => <label>
  - `MessageText` => <p> error, warning, success -> hello, toast, notifications, alerts etc.,
  - `TitleText` => <div> non clickable, all purposes
  - `InfoText` => <span> non clcikable, all purposes but not like TitleText (simple text)
  - `HintText` => <span> italic specific tiny one
  - `ButtonText` => <div> only for buttons
  - `UnderlineText` => <span>
  - `StrikethroughText` => <span>
  - `NumberText` => <span>
  - `AddressText` => <address>

- Images

  - `BannerImage` => <img /> only for large size graphical images
  - `ThumbnailImage` => <img /> only for tiny size images
  - `RegularImage` => <img /> all purposes expect banner and thumbnail
  - `Figure` => <figure />
  - `LogoImage` => <img />

- Icons

  - `SVGFrame` => only <svg> tag children to be shared by dynamically
  

- how to use in code?
  - `@ui/contents/typography/Heading`
  - `@ui/contents/images/BannerImage`
  - `@ui/contents/icons/SVGFrame`