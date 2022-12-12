import { BrandLogo } from "@components/ui";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import s from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <>
      <div className={`${s.container} boxed`}>
        <div className="">
          <div className="row">
            <div className="col-md-4">
              <div className={s.brandContainer}>
                {" "}
                <Image
                  alt="icon"
                  src="/images/logo.svg"
                  width={150}
                  height={40}
                />
              </div>
              <div className="f15 mt-4 mb-3">
                The ownership of an NFT is recorded in the blockchain, and can
                be transferred by the owner.
              </div>
            </div>
            <div className={`col-md-2 col-6 ${s.singleBlock}`}>
              <p className="w600">Marketplace</p>
              <Link href="#">
                <a className={s.links}>All NFTs</a>
              </Link>
              <Link href="#">
                <a className={s.links}>Collectibles</a>
              </Link>
              <Link href="#">
                <a className={s.links}>Domain Names</a>
              </Link>
              <Link href="#">
                <a className={s.links}>Trading Cards</a>
              </Link>
              <Link href="#">
                <a className={s.links}>Utility</a>
              </Link>
            </div>

            <div className={`col-md-2 col-6 ${s.singleBlock}`}>
              <p className="w600">My Account</p>
              <Link href="#">
                <a className={s.links}>Profile</a>
              </Link>
              <Link href="#">
                <a className={s.links}>Favorites</a>
              </Link>
              <Link href="#">
                <a className={s.links}>Watchlist</a>
              </Link>
              <Link href="#">
                <a className={s.links}>My Collections</a>
              </Link>
              <Link href="#">
                <a className={s.links}>Settings</a>
              </Link>
            </div>

            <div className={`col-md-2 col-6 ${s.singleBlock}`}>
              <p className="w600">Resources</p>
              <Link href="#">
                <a className={s.links}>Help Center</a>
              </Link>
              <Link href="#">
                <a className={s.links}>Platform Status</a>
              </Link>
              <Link href="#">
                <a className={s.links}>Partners</a>
              </Link>
              <Link href="#">
                <a className={s.links}>Taxes</a>
              </Link>
              <Link href="#">
                <a className={s.links}>Blog</a>
              </Link>
            </div>

            <div className={`col-md-2 col-6 ${s.singleBlock}`}>
              <p className="w600">Social Media</p>

              {/* <div className={s.socialWrapper}>
                <Link href="#">
                  <a className={s.links}>
                    <Image
                      alt="img"
                      src="/images/icons/fb.svg"
                      width={25}
                      height={25}
                    />
                  </a>
                </Link>
                <Link href="#">
                  <a className={s.links}>
                    <Image
                      alt="icon"
                      src="/images/icons/insta.svg"
                      width={25}
                      height={25}
                    />
                  </a>
                </Link>
                <Link href="#">
                  <a className={s.links}>
                    <Image
                      alt="icon"
                      src="/images/icons/linkedin.svg"
                      width={25}
                      height={25}
                    />
                  </a>
                </Link>
                <Link href="#">
                  <a className={s.links}>
                    <Image
                      alt="icon"
                      src="/images/icons/twitter.svg"
                      width={25}
                      height={25}
                    />
                  </a>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className={`${s.bottomSection} boxed`}>
        <div className="muted">© Lorem Inc. All rights reserved.</div>
        <div className={`${s.links} muted`}>
          <Link href="#">
            <a className={s.links}>Privacy Policy</a>
          </Link>
          <Link href="#">
            <a className={s.links}>Terms of Service</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
