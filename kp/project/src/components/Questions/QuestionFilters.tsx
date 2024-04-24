import { images } from "../../utils/imageLoader"

const QuestionFilters = () => {
   const selectFilter = (event) => {
      // console.log(event)
      // console.log(event.target.classList)
      const filters = Array.from(document.querySelectorAll('.selectable'))
      console.log(filters)

      const chosenFilter = filters.find(f => f == event.target)
      console.log(chosenFilter!)
      chosenFilter.classList.add('selected')
      console.log('DEBUG: selected added from chosen filter')
      console.log(chosenFilter!.classList)
      const rest = filters.filter(f => f != event.target)
      rest.forEach(r => {
         r.classList.remove('selected')
         console.log('DEBUG: selected added from chosen filter')
         console.log(r.classList)
      })

   }
   return <>
      <div className="flex justify-center items-center w-full mb-[30px]">
         <div className="px-2.5 py-[5px] bg-gray-200 selectable selected mr-[11px] selectable rounded-[100px] justify-start items-center gap-[5px] flex" onClick={selectFilter}>
            <div className="w-3 h-3 relative flex items-center " >
               <div className="w-2.5 h-2.5">
                  <img alt="" src={images.newIcon} className="firstIcon" />
               </div>
            </div>
            <div className="text-[13px] font-['Roboto'] capitalize tracking-wide text-zinc-500">New</div>
         </div>
         <div className="px-2.5 py-[5px] bg-gray-200 mr-[11px] rounded-[100px] justify-start items-center selectable gap-[5px] flex" onClick={selectFilter}>
            <div className="w-3 h-3 relative flex items-center " >
               <div className="w-3 h-3">
                  <img alt="" src={images.onTopIcon} />
               </div>
            </div>
            <div className="text-zinc-500 text-[13px] font-normal font-['Roboto'] capitalize tracking-wide">Top</div>
         </div>
         <div className="px-2.5 py-[5px] bg-gray-200 mr-[11px] rounded-[100px] justify-start items-center gap-[5px] flex selectable" onClick={selectFilter}>
            <div className="w-3 h-3 relative flex items-center" >
               <img alt="" src={images.hotIcon} />
            </div>
            <div className="text-zinc-500 text-[13px] font-normal font-['Roboto'] capitalize tracking-wide">Hot</div>
         </div>
         <div className="px-2.5 py-[5px] bg-gray-200 rounded-[100px] justify-start selectable items-center gap-[5px] flex" onClick={selectFilter}>
            <div className="w-3 h-3 relative flex items-center ">
               <div className="w-2.5 h-2.5">
                  <img alt="" src={images.closedIcon} />
               </div>
            </div>
            <div className="text-zinc-500 text-[13px] font-normal font-['Roboto'] capitalize tracking-wide">Closed</div>
         </div>
      </div >
   </>
}

export default QuestionFilters
