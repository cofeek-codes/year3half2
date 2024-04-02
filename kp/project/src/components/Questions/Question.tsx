
// const Question = (question: TQuestion) => {
const Question = () => {
	return <div className="question__wrapper">
		<div className="w-[725px] h-[193px] px-[30px] py-[25px] bg-white rounded-[5px] shadow border border-gray-200 flex-col justify-start items-start gap-[15px] inline-flex mb-[23px]">
			<div className="w-[665px] h-10 relative">
				<div className="w-[71px] h-8 left-[55px] top-[4px] absolute">
					<div className="left-0 top-[20px] absolute text-zinc-500 text-[10px] font-normal font-['Roboto'] tracking-wide">5 min ago</div>
					<div className="left-0 top-0 absolute text-black text-[13px] font-normal font-['Roboto'] tracking-wide">Golanginya</div>
				</div>
				<img className="w-10 h-10 left-0 top-0 absolute rounded-full" src="https://via.placeholder.com/40x40" />
				<div className="w-6 h-6 left-[641px] top-[8px] absolute" />
			</div>
			<div className="self-stretch h-[51px] flex-col justify-start items-start gap-2.5 flex">
				<div className="text-black text-sm font-bold font-['Roboto'] tracking-wide">How to patch KDE on FreeBSD?</div>
				<div className="w-[665px] text-black text-sm font-light font-['Roboto'] leading-[25px] tracking-wide">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit nulla</div>
			</div>
			<div className="w-[665px] h-[22px] relative bg-white">
				<div className="left-0 top-0 absolute justify-start items-center gap-2.5 inline-flex">
					<div className="px-2.5 py-[5px] bg-gray-200 rounded-[5px] justify-start items-center flex">
						<div className="text-zinc-500 text-[10px] font-normal font-['Roboto'] tracking-wide">golang</div>
					</div>
					<div className="px-2.5 py-[5px] bg-gray-200 rounded-[5px] justify-start items-center flex">
						<div className="text-zinc-500 text-[10px] font-normal font-['Roboto'] tracking-wide">linux</div>
					</div>
					<div className="px-2.5 py-[5px] bg-gray-200 rounded-[5px] justify-start items-center flex">
						<div className="text-zinc-500 text-[10px] font-normal font-['Roboto'] tracking-wide">overflow</div>
					</div>
				</div>
				<div className="left-[520px] top-[3px] absolute bg-white justify-start items-center gap-[15px] inline-flex">
					<div className="w-[41px] h-[15px] relative">
						<div className="left-[18px] top-0 absolute text-zinc-500 text-[13px] font-normal font-['Roboto'] tracking-tight">125</div>
						<div className="w-[15px] h-[15px] left-0 top-0 absolute" />
					</div>
					<div className="w-[33px] h-[15px] relative">
						<div className="left-[18px] top-0 absolute text-zinc-500 text-[13px] font-normal font-['Roboto'] tracking-tight">15</div>
						<div className="w-[15px] h-[15px] left-0 top-0 absolute" />
					</div>
					<div className="w-[41px] h-[15px] relative">
						<div className="left-[18px] top-0 absolute text-zinc-500 text-[13px] font-normal font-['Roboto'] tracking-tight">155</div>
						<div className="w-[15px] h-[15px] left-0 top-0 absolute" />
					</div>
				</div>
			</div>
		</div>
	</div>
}

export default Question
