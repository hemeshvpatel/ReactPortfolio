//A function that gives the ability to override the default style with one passed in through props
export function setNewStyle(defaultStyle, newStyle = {}) {
  return (defaultStyle = { ...defaultStyle, ...newStyle });
}

//Toggle Fxn

//return
//True: modal (onclick that toggles as false)
//False: button "Contact Me" (onclick that toggles true)

//close / open ButtonProps logic
//location
