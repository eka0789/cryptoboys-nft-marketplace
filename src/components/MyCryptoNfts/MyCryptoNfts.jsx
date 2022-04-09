import React, { useState, useEffect } from "react";
import CryptoNftNFTImage from "../CryptoNftNFTImage/CryptoNftNFTImage";
import MyCryptoNftNFTDetails from "../MyCryptoNftNFTDetails/MyCryptoNftNFTDetails";
import Loading from "../Loading/Loading";

const MyCryptoNfts = ({
  accountAddress,
  cryptoNfts,
  totalTokensOwnedByAccount,
}) => {
  const [loading, setLoading] = useState(false);
  const [myCryptoNfts, setMyCryptoNfts] = useState([]);

  useEffect(() => {
    if (cryptoNfts.length !== 0) {
      if (cryptoNfts[0].metaData !== undefined) {
        setLoading(loading);
      } else {
        setLoading(false);
      }
    }
    const my_crypto_Nfts = cryptoNfts.filter(
      (cryptoNft) => cryptoNft.currentOwner === accountAddress
    );
    setMyCryptoNfts(my_crypto_Nfts);
  }, [cryptoNfts]);

  return (
    <div>
      <div className="card mt-1">
        <div className="card-body align-items-center d-flex justify-content-center">
          <h5>
            Total No. of Trial Test You Own : {totalTokensOwnedByAccount}
          </h5>
        </div>
      </div>
      <div className="d-flex flex-wrap mb-2">
        {myCryptoNfts.map((cryptoNft) => {
          return (
            <div
              key={cryptoNft.tokenId.toNumber()}
              className="w-50 p-4 mt-1 border"
            >
              <div className="row">
                <div className="col-md-6">
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
                </div>
                <div className="col-md-6 text-center">
                  <MyCryptoNftNFTDetails
                    cryptoNft={cryptoNft}
                    accountAddress={accountAddress}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyCryptoNfts;
