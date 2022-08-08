import React from 'react'

function Button({children,type,version,btnDisbaled}) {
  return (
    
    <button className={`btn btn-${version}`} type={type}  disabled={btnDisbaled}>{children}</button>
    
  )

}

export default Button