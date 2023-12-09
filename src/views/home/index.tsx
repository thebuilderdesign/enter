// Next, React
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Components
import { RequestAirdrop } from '../../components/RequestAirdrop';
import pkg from '../../../package.json';

// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';

export const HomeView: FC = ({ }) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore((s) => s.balance)
  const { getUserSOLBalance } = useUserSOLBalanceStore()

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58())
      getUserSOLBalance(wallet.publicKey, connection)
    }
  }, [wallet.publicKey, connection, getUserSOLBalance])

  return (

    <div className="p-4 mx-auto md:hero">
      <div className="flex flex-col md:hero-content">
        <div className='mt-6'>
        <div className='mt-4 text-sm font-normal text-right align-bottom text-slate-600'>{pkg.version}</div>
        <h1 className="mb-4 text-5xl font-bold text-center text-transparent md:pl-12 bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500">
          RUWET STAKING
        </h1>
        </div>
        <h4 className="my-2 text-center md:w-full text-2x1 md:text-4xl text-slate-300">
          <p>Light-speed swaps. Next-level liquidity. Friction-less yield.</p>
          <p className='leading-relaxed text-slate-500 text-2x1'>Stake Ruwet with 100% APY.</p>
        </h4>
        <div className="relative group justify-space-between">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-indigo-500 rounded-lg blur opacity-40 animate-tilt"></div>
          <div className="max-w-md mx-auto mockup-code bg-primary border-2 border-[#5252529f] p-6 px-10 my-2 ">
          <div style={{display: 'responsive'}}>
      <div style={{ display: 'flex' }}>
        <Image
          alt=""
          src='/sol.png'
          width={32}
          height={32}
          style={{
            objectFit: 'contain', // cover, contain, none
            borderRadius: '100%',
            justifyContent: 'space-between',
            display: 'flex',
            gap: '0px'
          }}
        />
        <Image
          alt=""
          src='/sol.png'
          width={32}
          height={32}
          style={{
            objectFit: 'contain', // cover, contain, none
            borderRadius: '100%',
            justifyContent: 'space-between',
            display: 'flex',
            gap: '0px'
          }}
        />
      </div>
          </div>    
          <code className="truncate">{`RUWET - SOL `} </code>
              <div></div>
            <pre data-prefix=">">
              <code className="truncate">{`APY   : 100%`} </code>
            </pre>
            <pre data-prefix=">">
              <code className="truncate">{`Total Staked : $--`} </code>
            </pre>
            <button
                            className="justify-center px-8 m-2 text-black items-right btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300"
                            
                            >
                                <span>Stake </span>
                
                        </button><button
                            className="justify-center px-8 m-2 text-black items-right btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300"
                            
                            >
                                <span>Unstaked </span>
                
                        </button>
          </div>
          <div className="max-w-md mx-auto mockup-code bg-primary border-2 border-[#5252529f] p-6 px-10 my-2">
          <div style={{ display: 'flex' }}>
        <Image
          alt=""
          src='/sol.png'
          width={32}
          height={32}
          style={{
            objectFit: 'contain',
            borderRadius: '100%',
            justifyContent: 'space-between',
            display: 'flex',
            gap: '0px'
          }}
        />
        <Image
          alt=""
          src='/usdc.png'
          width={32}
          height={32}
          style={{
            objectFit: 'contain',
            borderRadius: '100%',
            justifyContent: 'space-between',
            display: 'flex',
            gap: '0px'
          }}
        />
      </div>   
            
              <code className="truncate">{`RUWET - USDC `} </code>
              <div></div>
            <pre data-prefix=">">
              <code className="truncate">{`APY   : 100%`} </code>
            </pre>
            <pre data-prefix=">">
              <code className="truncate">{`Total Staked : $--`} </code>
            </pre>
            <button
                            className="justify-center px-8 m-2 text-black items-right btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300"
                            
                            >
                                <span>Stake </span>
                
                        </button><button
                             className="justify-center px-8 m-2 text-black items-right btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300"
                            
                            >
                                <span>Unstaked </span>
                
                        </button>
            
          </div>
        </div>
        <div className="flex flex-col mt-2">
          <RequestAirdrop />
          
        </div>
      </div>
    </div>
  );
};
