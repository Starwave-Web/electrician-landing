
const InfoCard = ({id, description}:{id: string, description: string}) => {
  return (
    <div className="flex flex-col gap-[10px] items-start max-w-[330px]">
        <div className="text-primary-red border border-primary-red rounded-full flex justify-center items-center h-6 w-6">
            <p className="text-[14px] font-black text-primary-red">{id}</p>
        </div>
        <p className="text-[0.875rem]/[1.25rem] text-primary-grey font-medium">{description}</p>
    </div>
  )
}

export default InfoCard