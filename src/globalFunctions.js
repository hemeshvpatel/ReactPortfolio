//build out
export const setNewStyle = (defaultStyle, newStyle = {}) => {
    return (defaultStyle = { ...defaultStyle, ...newStyle });
  };