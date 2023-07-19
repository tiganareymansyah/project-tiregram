export default function Button(props) {
    return(
        <div className="flex justify-center items-center">
            <button className="p-2 rounded-full w-20 bg-pink-600 text-white mt-7">{props.name}</button>
        </div>
    )
}