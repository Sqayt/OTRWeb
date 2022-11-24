export default () => {
    return (
        <div>
            <div style={{display: "flex", margin: "25px"}}>
                <label style={{marginRight: "100px", marginTop: "45px"}}>Описание</label>
                <input type={'text'} style={{height: "100px", width: "200px", padding: "30px", fontSize: "16px"}}/>
            </div>
            <div style={{display: "flex", margin: "25px"}}>
                <label style={{marginRight: "100px", marginTop: "45px"}}>Отвественный</label>
                <select id={'selectValue'} style={{marginRight: "100px", marginTop: "45px"}}>Отвественный
                    <option>Михаил</option>
                    <option>Сергей</option>
                </select>
            </div>
            <div style={{display: "flex", margin: "25px"}}>
                <label style={{marginRight: "100px", marginTop: "45px"}}>Приоритет</label>
                <h3>5</h3>
                <button>+</button>
                <button>-</button>
            </div>
        </div>
    )
}