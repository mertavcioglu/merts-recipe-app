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
      </form>
    </div>
  )
}

export default Form