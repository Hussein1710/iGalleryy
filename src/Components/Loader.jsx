
const Loader = ({ showLoader }) => {
	return (
		<div
			className={`${
				showLoader ? "flex" : "none"
			} fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50`}
		>
			<div className="rounded-md bg-white p-6">
				<div className="mb-4 flex items-center justify-center">
					<div className="h-8 w-8 animate-spin rounded-full border-r-2 border-t-2 border-blue-500"></div>
				</div>
				<div className="text-center">Loading...</div>
			</div>
		</div>
	);
};

export default Loader;
