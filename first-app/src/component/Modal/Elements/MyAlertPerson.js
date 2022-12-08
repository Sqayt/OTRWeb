export default (props) => {
    let msg = "";
    let isMsg = false;

    console.log(props)

    if (props.post === "") {
        msg += "У вас не введено: должность\n";
        isMsg = true;
    }
    if (props.name === "") {
        msg += "У вас не введено: имя\n";
        isMsg = true;
    }
    if (props.surName === "") {
        msg += "У вас не введено: фамилия\n";
        isMsg = true;
    }
    if (props.middleName === "") {
        msg += "У вас не введено: отчество\n";
        isMsg = true;
    }
    if (props.branchName === "") {
        msg += "У вас не введено: название филиала\n";
        isMsg = true;
    }
    if (props.description === "") {
        msg += "У вас не введено: описание\n";
        isMsg = true;
    }
    if (props.personFullName === "") {
        msg += "У вас не введено: исполнитель\n";
        isMsg = true;
    }
    if (props.priority === "") {
        msg += "У вас не введено: приоритет\n";
        isMsg = true;
    }

    if (isMsg) {
        alert(msg);
    }

    return isMsg;
}