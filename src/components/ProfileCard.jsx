export default function ProfileCard({ users }) {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 py-4">
			{users.map((user, index) => {
				const randomUser = Math.floor(Math.random() * 100) + 1;

				return (
					<div
						key={index}
						className="border p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
					>
						<div className="flex items-center">
							<div className="relative">
								<img
									className="size-16 rounded-full object-cover"
									src={`https://randomuser.me/api/portraits/women/${randomUser}.jpg`}
									alt="Avatar"
								/>
								{/* <div className="absolute inset-0 rounded-full shadow-inner"></div> */}
							</div>
							<div className="ml-4">
								<h2 className="font-bold text-white text-lg truncate w-44 md:w-60 lg:w-40">
									{user.title}
								</h2>
								<p className="text-white">Software Engineer</p>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
