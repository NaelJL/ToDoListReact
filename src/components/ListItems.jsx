export default function ListItem({itemData, deleteItem}){
    return (
        <li className="p-2 bg-zinc-200 rounded flex my-4 w-80">
            <span>{itemData.content}</span>
            <button onClick={deleteItem} className="ml-auto bg-red-600 w-6 h-6 rounded text-zinc-200">X</button>
        </li>
    )
}