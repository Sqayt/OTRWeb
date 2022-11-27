export default () => {
    return (
        <div>
            <div style={{display: "flex", margin: "25px"}}>
                <label style={{marginRight: "100px", marginTop: "45px"}}>Описание</label>
                <textarea style={{paddingLeft: "2%", width: "100%", boxSizing: "border-box", padding:"10px", height: "150px"}}/>
            </div>
            <div style={{display: "flex", margin: "25px"}}>
                <label style={{marginRight: "69px", marginTop: "45px"}}>Отвественный</label>
                <select id={'selectValue'} style={{marginTop: "45px", height: "25px", width: "150px"}}>
                    <option>Михаил</option>
                    <option>Сергей</option>
                </select>
            </div>
            <div style={{display: "flex", margin: "25px"}}>
                <label style={{marginRight: "100px", marginTop: "45px"}}>Приоритет</label>

                <div className={'btn_position'} style={{display: "flex", marginTop: "5%"}}>
                    <h3>5</h3>
                    <button className={'btn_add'} style={{height: "20px", width: "20px", marginLeft: "18%", marginTop: "45%", textAlign: "center"}}>+</button>
                    <button className={'btn_rem'} style={{height: "20px", width: "20px", marginLeft: "18%", marginTop: "45%", textAlign: "center"}}>-</button>
                </div>
            </div>
        </div>
    )
}