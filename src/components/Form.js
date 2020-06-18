import React from "react"

function Form(props) {

  return (
    <div >
      <form onSubmit={props.getSearch} className="search-box">
        <input
          id="form"
          autoComplete="off"
          autoFocus
          type="text"
          className="search-bar"
          placeholder="Search for a food..."
          onChange={props.onChange}
          value={props.search}
        />
        <button className="btn btn-danger" type="submit">Search</button>
      </form>
    </div>
  )
}

export default Form