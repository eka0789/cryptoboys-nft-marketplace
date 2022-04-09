import React, { useState, useEffect } from "react";
import CryptoNftNFTImage from "../CryptoNftNFTImage/CryptoNftNFTImage";
import CryptoNftNFTDetails from "../CryptoNftNFTDetails/CryptoNftNFTDetails";
import Loading from "../Loading/Loading";

const AllCryptoNfts = ({
  cryptoNfts,
  accountAddress,
  totalTokensMinted,
  changeTokenPrice,
  toggleForSale,
  buyCryptoNft,
}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (cryptoNfts.length !== 0) {
      if (cryptoNfts[0].metaData !== undefined) {
        setLoading(loading);
      } else {
        setLoading(false);
      }
    }
  }, [cryptoNfts]);

  return (
    <div>
      <div className="card mt-1">
        <div className="card-body align-items-center d-flex justify-content-center">
          <h5>
            Total No. of Trial Test Minted On The Platform :{" "}
            {totalTokensMinted}
          </h5>
        </div>
      </div>
      <div className="d-flex flex-wrap mb-2">
        {cryptoNfts.map((cryptoNft) => {
          return (
            <div
              key={cryptoNft.tokenId.toNumber()}
              className="w-50 p-4 mt-1 border"
            >
              {!loading ? (
                <CryptoNftNFTImage
                  colors={
                    cryptoNft.metaData !== undefined
                      ? cryptoNft.metaData.metaData.colors
                      : ""
                  }
                />
              ) : (
                <Loading />
              )}
              <CryptoNftNFTDetails
                cryptoNft={cryptoNft}
                accountAddress={accountAddress}
                changeTokenPrice={changeTokenPrice}
                toggleForSale={toggleForSale}
                buyCryptoNft={buyCryptoNft}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllCryptoNfts;
