import React from "react"

function Form(props) {

  return (

    <form onSubmit={props.getSearch} className="search-form">
      <input
        autoFocus
        className="search-bar"
        onChange={props.onChange}
        type="text"
        value={props.search} />
      <button className="btn btn-danger" type="submit">Search</button>
    </form>

  )
}

export default Form