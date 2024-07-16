import Menu from "../menu";

export default function Divider() {
    return (
        <div className="flex w-full flex-col  lg:flex-row">
            <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center">
                <Menu />
            </div>
            <div className="divider lg:divider-horizontal">OR</div>
            <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center"></div>
        </div>
    )
}