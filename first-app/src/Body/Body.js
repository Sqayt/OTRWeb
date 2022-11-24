export default () => {
    return (
        <body>
            <div style={{display: "flex", margin: "25px"}}>
                <label style={{marginRight: "100px", marginTop: "45px"}}>Описание</label>
                <input type={'text'} style={{height: "100px", width: "200px"}}/>
            </div>
            <div style={{display: "flex", margin: "25px"}}>
                <label style={{marginRight: "100px", marginTop: "45px"}}>Отвественный</label>
                <select id={'selectValue'} style={{marginRight: "100px", marginTop: "45px"}}>Отвественный
                    <option>Михаил</option>
                    <option>Сергей</option>
                </select>
            </div>
        </body>
    )
}