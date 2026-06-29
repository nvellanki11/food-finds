import "./BanList.css"

export default function BanList({banned, setBanned}) {

    const removeBannedItem = (index) => {
        setBanned(banned.filter((_, i) => i !== index))
    }
    return (
        <div className="ban-list">
            <h2>Ban List</h2>
            <h4>Choose an Attribute to Ban it</h4>
            <ul>
                {banned.map((item, index) => (
                    <li key={index}>
                        <button type='button' onClick={() => removeBannedItem(index)}>{item}</button>
                        </li>
                ))
                }
            </ul>
        </div>
    )
}