const Options = ({ addOption, deleteOptions, updateText, uid,val }) => {
    return (
        <>
            <div className="col-md-8 offset-md-2 col-12 input-group my-3 ">
                <input type="text" className="form-control" placeholder="Option Text"
                value={val.value}
                onChange={event => { updateText(uid, event.target.value) }}/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" onClick={() => addOption()} >+</button>
                    <button className="btn btn-outline-secondary" type="button"
                        onClick={() => deleteOptions(uid)}>-</button>
                </div>
            </div>
        </> 
    )
}
export default Options;