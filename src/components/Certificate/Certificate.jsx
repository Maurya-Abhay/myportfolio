import React, { useState } from "react";
import { certificates } from "../../constants";

const Certificate = () => {
	const [selectedCert, setSelectedCert] = useState(null);
	const handleOpenModal = (cert) => setSelectedCert(cert);
	const handleCloseModal = () => setSelectedCert(null);
	return (
		<section
			id="certificate"
			className="py-12 px-2 md:px-8 lg:px-16 font-sans bg-transparent min-h-[40vh] flex flex-col items-center justify-center"
		>
			{/* Section Title */}
			<div className="text-center mb-8">
				<h2 className="text-2xl md:text-3xl font-extrabold text-transparent bg-gradient-to-r from-[#8245ec] via-pink-500 to-[#00ff99] bg-clip-text mb-2 leading-tight animate-gradient-x">CERTIFICATES</h2>
				<div className="w-16 h-1 bg-gradient-to-r from-[#8245ec] to-[#00ff99] mx-auto mt-2 rounded-full animate-gradient-rotate"></div>
				<p className="text-gray-400 mt-2 text-sm md:text-base font-medium max-w-xl mx-auto">
					My certifications showcase my commitment to learning and professional growth.
				</p>
			</div>
			{/* Certificate Cards */}
			<div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center justify-center">
				{certificates.map((cert, idx) => (
					<div
						key={idx}
						className="bg-[#18132a]/80 backdrop-blur-lg p-2 rounded shadow-2xl border border-[#8245ec40] flex flex-col items-center hover:scale-105 transition-transform duration-300 min-w-[320px] cursor-pointer"
						onClick={() => handleOpenModal(cert)}
					>
						<div className="w-80 h-64 bg-white rounded overflow-hidden shadow-lg border-2 border-[#8245ec40] mb-4 flex items-center justify-center">
							<img
								src={cert.img}
								alt={cert.title}
								className="w-full h-full object-cover"
							/>
						</div>
						<h3 className="text-xs md:text-sm font-bold text-transparent bg-gradient-to-r from-[#ff00cc] via-[#8245ec] to-[#00ff99] bg-clip-text animate-gradient-x mb-1 text-center">
							{cert.title}
						</h3>
						<p className="text-xs text-gray-300 mb-1 text-center">{cert.issuer}</p>
						<p className="text-xs text-gray-500 text-center">{cert.date}</p>
					</div>
				))}
			</div>
			{/* Modal */}
					{selectedCert && (
						<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
							<div className="bg-[#18132a]/90 rounded-3xl shadow-2xl border-4 border-[#8245ec80] p-10 max-w-3xl w-full flex flex-col items-center relative animate-fade-in">
								<button
									className="absolute top-4 right-6 text-white text-3xl font-bold hover:text-pink-400 transition-colors"
									onClick={handleCloseModal}
									aria-label="Close"
								>
									&times;
								</button>
								<div className="w-full h-[32rem] bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-[#8245ec40] mb-6 flex items-center justify-center">
									<img
										src={selectedCert.img}
										alt={selectedCert.title}
										className="w-full h-full object-contain"
									/>
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-[#ff00cc] via-[#8245ec] to-[#00ff99] bg-clip-text animate-gradient-x mb-3 text-center">
									{selectedCert.title}
								</h3>
								<p className="text-lg text-gray-300 mb-2 text-center">{selectedCert.issuer}</p>
								<p className="text-lg text-gray-500 text-center mb-2">{selectedCert.date}</p>
							</div>
						</div>
					)}
		</section>
	);
};

export default Certificate;
