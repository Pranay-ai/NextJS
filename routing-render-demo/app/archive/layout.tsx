export default function LayoutArcive({archive,latest}: {archive: React.ReactNode,latest: React.ReactNode}){

    return (
        <div className="flex flex-col items-center p-3">
            {archive}
            {latest}
        </div>
    )


}