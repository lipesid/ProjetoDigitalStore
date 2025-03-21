export default function Section(props) {

    let align = props.titleAlign ? props.titleAlign : 'left';
    let position = `text-${align}`;
    return (
        <>
            <div className="flex flex-col m-auto max-w-[1260px] mb-[70px]">
                <div className="flex mb-[15px]">
                    <div className={position + ' grow'}>
                        <h2 className="text-[24px] font-extrabold">{props.title}</h2>
                    </div>
                    {props.link && (
                        <div className="self-center">
                            <a className={`flex text-[${props.link.color}]`} href={props.link.href}>{props.link.text}<img className="pl-5" src="src/assets/images/arrow.svg"></img></a>
                        </div>
                    )}
                </div>
                {props.children}
            </div>


        </>
    )

}