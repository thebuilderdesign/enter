import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
export const Footer: FC = () => {
    return (
        <div className="flex">
            <footer className="border-t-2 border-[#141414] bg-transparent hover:text-white w-screen" >
                <div className="py-12 ml-12 mr-12">
                    <div className="relative grid grid-cols-2 gap-2 md:grid-cols-6 md:gap-8 md:space-x-12">
                        <div className='flex flex-col items-center col-span-2 mx-4 md:items-start'>
                            <div className='flex flex-row ml-1'>
                                <Link href="https://solana.com" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                                    <div className='flex flex-row ml-1'>
                                        <Image
                                            src="/solanaLogo.png"
                                            alt="solana icon"
                                            width={156}
                                            height={96}
                                        />
                                    </div>
                                </Link>
                            </div>
                            <div className="items-start m-1 mb-6 font-normal tracking-tight sm:text-left place-items-start text-secondary">
                                        © 2023 Solana Foundation
                            </div>
                        </div>

                        <div className="items-center max-w-screen-lg mx-auto mb-6">
                            <div className="font-normal capitalize mb-2.5">SOCIAL</div>

                            <div className="flex flex-col gap-2 mb-0">
                                <Link href="#" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                                    Twitter
                                </Link>
                                <Link href="#" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                                    Telegram
                                </Link>
                            </div>
                        </div>

                        <div className="items-center max-w-screen-lg mx-auto mb-6">
                            <h5 className="font-normal capitalize tracking-tight  mb-2.5">DEVELOPERS</h5>

                            <div className="flex flex-col gap-2 mb-0">
                                <Link href="https://docs.solana.com/developers" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                                    Documentation
                                </Link>
                                <Link href="https://github.com/solana-mobile/solana-mobile-stack-sdk" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                                    Mobile SDK
                                </Link>
                            </div>
                        </div>

                        <div className="items-center max-w-screen-lg mx-auto mb-6">
                            <h5 className="font-normal tracking-tight  mb-2.5">GET RUWET</h5>

                            <div className="flex flex-col gap-2 mb-0">
                                <Link href="https://solana.com/news" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                                    Raydium
                                </Link>
                                <Link href="https://solana.org/validators" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                                    Orca
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
