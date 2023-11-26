// import {
//     createMint,
//     getAccount,
//     getMint,
//     getOrCreateAssociatedTokenAccount,
//     mintTo,
//     createAssociatedTokenAccount
// } from '@solana/spl-token';
// import {
//     clusterApiUrl,
//     Connection,
//     Keypair,
//     LAMPORTS_PER_SOL,
//     PublicKey,
//     Transaction,
//     sendAndConfirmTransaction,
//     Signer,
// } from '@solana/web3.js';

import { createMetadataAccountV3 } from "@metaplex-foundation/mpl-token-metadata";
import { clusterApiUrl, Connection } from "@solana/web3.js";

// export const createToken = async () => {
//     const payer = Keypair.generate();
//     const mintAuthority = Keypair.generate();
//     const freezeAuthority = Keypair.generate();

//     const connection = new Connection(
//         clusterApiUrl('mainnet-beta'), // Use mainnet cluster
//         'confirmed'
//     );

//     const airdropSignature = await connection.requestAirdrop(
//         payer.publicKey,
//         LAMPORTS_PER_SOL
//     );

//     await connection.confirmTransaction(airdropSignature);

//     const mint = await createMint(
//         connection,
//         payer,
//         mintAuthority.publicKey,
//         freezeAuthority.publicKey,
//         9 // We are using 9 to match the CLI decimal default exactly
//     );

//     // Log or return the contract address
//     console.log('Contract Address:', mint.toBase58());

//     const tokenAccount = await getOrCreateAssociatedTokenAccount(
//         connection,
//         payer,
//         mint,
//         payer.publicKey
//     );

//     // Set token name and symbol
//     const tokenName = 'Marine';
//     const tokenSymbol = '$Marine';

//     // Set metadata (you can use a service like Arweave for image storage)
//     const tokenMetadata = {
//         name: tokenName,
//         symbol: tokenSymbol,
//         uri: 'https://i.postimg.cc/cHdv3WFJ/marine.jpg', // Replace with the actual URL for the token image
//     };

//     const metadataBuffer: Buffer = Buffer.from(JSON.stringify(tokenMetadata));

//     const mintInfo = await getMint(
//         connection,
//         mint
//     );

//     await mintTo(
//         connection,
//         payer,
//         mint,
//         tokenAccount.address,
//         [mintAuthority, metadataBuffer],
//         100000000000n
//     )

//     // Mint tokens to the associated account
//     // const mintToTransaction = new Transaction().add(
//     //     await token.mintTo(tokenAccount.address, mintAuthority.publicKey, [], 1n, [mintAuthority, metadataBuffer])
//     // );

//     // const mintToTransaction = new Transaction().add(
//     //     await mint.mintTo(tokenAccount.address, mintAuthority.publicKey, [], 1100000000000n, [mintAuthority, metadataBuffer])
//     // );

//     // // Sign and send the transaction
//     // const setMetadataSignature = await sendAndConfirmTransaction(
//     //     connection,
//     //     mintToTransaction,
//     //     [payer, mintAuthority, freezeAuthority],
//     // );

//     // Sign and send the transaction
//     // const setMetadataSignature = await sendAndConfirmTransaction(
//     //     connection,
//     //     mintToTransaction,
//     //     [payer, mintAuthority, freezeAuthority],
//     // );

//     // Log the creator address
//     console.log('Creator Address:', payer.publicKey.toBase58());
// };

// // // Function to get the associated token address
// // const getAssociatedTokenAddress = (
// //     walletAddress: PublicKey,
// //     tokenMintAddress: PublicKey
// // ): PublicKey => {
// //     return Token.getAssociatedTokenAddress(
// //         Token.ASSOCIATED_TOKEN_PROGRAM_ID,
// //         Token.TOKEN_PROGRAM_ID,
// //         tokenMintAddress,
// //         walletAddress
// //     );
// // };


// import { createMint, getAccount, getMint, getOrCreateAssociatedTokenAccount, mintTo, } from '@solana/spl-token';
// import { clusterApiUrl, Commitment, Connection, Keypair, LAMPORTS_PER_SOL, Signer } from '@solana/web3.js';

// export const createToken = async () => {
//     const payer = Keypair.generate();
//     const mintAuthority = Keypair.generate();
//     const freezeAuthority = Keypair.generate();

//     // const connection = new Connection(clusterApiUrl('mainnet-beta'), 'finalized');

//     const connection = new Connection(`https://rpc.helius.xyz/?api-key=e92bee1b-e9c2-406f-a81d-65b5a80fea34`, 'confirmed');
//     // const connection = new Connection(clusterApiUrl('mainnet-beta'), 'confirmed');

//     const airdropSignature = await connection.requestAirdrop(
//         payer.publicKey,
//         LAMPORTS_PER_SOL,
//     );

//     await connection.confirmTransaction(airdropSignature);

//     const mint = await createMint(
//         connection,
//         payer,
//         mintAuthority.publicKey,
//         freezeAuthority.publicKey,
//         9 // We are using 9 to match the CLI decimal default exactly
//     );

//         // Set token name and symbol
//     const tokenName = 'Marine';
//     const tokenSymbol = '$Marine';

//     // Set metadata (you can use a service like Arweave for image storage)
//     const tokenMetadata = {
//         name: tokenName,
//         symbol: tokenSymbol,
//         uri: 'https://i.postimg.cc/cHdv3WFJ/marine.jpg', // Replace with the actual URL for the token image
//     };

//     const metadataBuffer: Buffer = Buffer.from(JSON.stringify(tokenMetadata));

//     const mintInfo = await getMint(
//         connection,
//         mint
//     )

//     const tokenAccount = await getOrCreateAssociatedTokenAccount(
//         connection,
//         payer,
//         mint,
//         payer.publicKey
//     )

//     await mintTo(
//         connection,
//         payer,
//         mint,
//         tokenAccount.address,
//         mintAuthority, 
//         1000000000n,
//         [mintAuthority, Keypair.fromSecretKey(metadataBuffer)],
//     )

//     const tokenAccountInfo = await getAccount(
//         connection,
//         tokenAccount.address
//     );

//     console.log('Contract Address:', mint.toBase58());
//     console.log('Creator Address:', payer.publicKey.toBase58());

//     console.log('Token Account Balance:', tokenAccountInfo.amount);
// }


// const connection = new Connection(clusterApiUrl('mainnet-beta'), 'finalized');
// const wallet = "" // Your wallet setup
// const mintAddress = PublicKey('YOUR_SPL_TOKEN_MINT_ADDRESS');

// // Define metadata
// const metadata = {
//     name: "Marine",
//     symbol: "marn",
//     uri: "https://example.com/metadata.json", // URL to your metadata JSON
//     // ... other metadata details
// };

// const payer = "mysolanaaddress"

// // Create Metadata Account
// const transaction = await createMetadataAccountV3(
//     connection,
//     payer, 
//     mintAddress, 
//     payer.publicKey, 
//     payer.publicKey,
//     metadata
// );

// // Sign and send the transaction
// const signature = await web3.sendAndConfirmTransaction(connection, transaction, [payer]);
// console.log("Metadata account created with signature:", signature);

export const updateToken = async () => {

}