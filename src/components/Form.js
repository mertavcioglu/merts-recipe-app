import React from "react"

function Form(props) {

  return (

    <form onSubmit={props.getSearch} className="search-form">
      <input
        id="form"
        autoFocus
        className="search-bar"
        onChange={props.onChange}
        type="text"
        value={props.search}
        placeholder="Search for a food..."
      />
      <button className="btn btn-danger" type="submit">Search</button>
    </form>

  )
}

export default Form