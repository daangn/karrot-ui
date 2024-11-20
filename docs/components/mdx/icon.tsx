import * as V3Icons from "@daangn/react-monochrome-icon";
import * as V3ColorIcons from "@daangn/react-multicolor-icon";
import * as V2Icons from "@seed-design/react-icon";
import Link from "fumadocs-core/link";
import * as changecase from "change-case";

export const V3 = ({
  name,
  type,
}: {
  name: keyof typeof V3Icons | keyof typeof V3ColorIcons;
  type: "monochrome" | "multicolor";
}) => {
  const Icons = type === "monochrome" ? V3Icons : V3ColorIcons;
  const NewIcon = (Icons as Record<string, React.FC<{ size: number }>>)[name];

  if (!NewIcon) {
    return <code>{name}</code>;
  }

  const snakeCase = changecase.snakeCase(name);
  return (
    <div className="flex items-center gap-2">
      <NewIcon size={20} />
      <Link href={`/docs/design/foundation/iconography/${type}?icon=${snakeCase}`}>
        <code>{name}</code>
      </Link>
    </div>
  );
};

export const V2 = ({ name }: { name: keyof typeof V2Icons }) => {
  const OldIcon = V2Icons[name];

  if (!OldIcon) {
    return <code>{name}</code>;
  }

  return (
    <div className="flex items-center gap-2">
      <OldIcon size={20} />
      <code>{name}</code>
    </div>
  );
};

export const V2Color = ({ name }: { name: keyof typeof V2ServiceIcons }) => {
  return (
    <div className="flex items-center gap-2">
      {V2ServiceIcons[name]}
      <code>{name}</code>
    </div>
  );
};

const V2ServiceIcons = {
  IconCategoryCar: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.01 11.74C20.74 11.55 20.46 11.37 20.16 11.2L19.95 10.03H21C21.55 10.03 22 9.58 22 9.03C22 8.48 21.55 8.03 21 8.03H19.6L19.13 5.39C19.01 4.68 18.5 4.1 17.82 3.88C16.1 3.32 14.12 3 12 3C9.88 3 7.9 3.32 6.18 3.88C5.5 4.1 5 4.69 4.87 5.39L4.4 8.03H3C2.45 8.03 2 8.48 2 9.03C2 9.58 2.45 10.03 3 10.03H4.05L3.84 11.2C3.54 11.37 3.25 11.55 2.98 11.74C2.45 12.12 2.14 12.73 2.14 13.38V20.53C2.14 20.81 2.36 21.03 2.64 21.03H6.66C6.94 21.03 7.16 20.81 7.16 20.53V19.12H16.85V20.53C16.85 20.81 17.07 21.03 17.35 21.03H21.35C21.63 21.03 21.85 20.81 21.85 20.53V13.38C21.85 12.73 21.54 12.12 21.01 11.74ZM7.61 15.95C6.86 15.95 6.26 15.35 6.26 14.6C6.26 13.85 6.86 13.25 7.61 13.25C8.36 13.25 8.96 13.85 8.96 14.6C8.96 15.35 8.36 15.95 7.61 15.95ZM16.41 15.95C15.66 15.95 15.06 15.35 15.06 14.6C15.06 13.85 15.66 13.25 16.41 13.25C17.16 13.25 17.76 13.85 17.76 14.6C17.76 15.35 17.16 15.95 16.41 15.95ZM12.01 9.27C9.83 9.27 7.8 9.62 6.06 10.22L6.85 5.77C8.42 5.26 10.2 5 12.02 5C13.84 5 15.62 5.27 17.19 5.77L17.98 10.23C16.24 9.63 14.21 9.28 12.02 9.28L12.01 9.27Z"
        fill="#358EF9"
      />
    </svg>
  ),
  IconCategoryRealty: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.9852 7.9825L12.2452 2.1425C11.9252 1.9525 11.5352 1.9525 11.2152 2.1425L1.48524 7.9825C1.01524 8.2625 0.855243 8.8825 1.14524 9.3525C1.33524 9.6625 1.66524 9.8425 2.00524 9.8425C2.18524 9.8425 2.35524 9.7925 2.51524 9.7025L2.73524 9.5725V20.5825C2.73524 21.1325 3.18524 21.5825 3.73524 21.5825H19.7352C20.2852 21.5825 20.7352 21.1325 20.7352 20.5825V9.5625L20.9552 9.6925C21.4252 9.9725 22.0452 9.8225 22.3252 9.3525C22.6052 8.8825 22.4552 8.2625 21.9852 7.9825ZM10.2352 14.7425C10.2352 14.8525 10.1452 14.9425 10.0352 14.9425H7.93524C7.82524 14.9425 7.73524 14.8525 7.73524 14.7425V12.6425C7.73524 12.5325 7.82524 12.4425 7.93524 12.4425H10.0352C10.1452 12.4425 10.2352 12.5325 10.2352 12.6425V14.7425ZM15.7352 14.7425C15.7352 14.8525 15.6452 14.9425 15.5352 14.9425H13.4352C13.3252 14.9425 13.2352 14.8525 13.2352 14.7425V12.6425C13.2352 12.5325 13.3252 12.4425 13.4352 12.4425H15.5352C15.6452 12.4425 15.7352 12.5325 15.7352 12.6425V14.7425Z"
        fill="#D15FCC"
      />
    </svg>
  ),
  IconCategoryJobs: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.2296 18.9998L20.1696 17.2798C21.6218 15.1151 22.2169 12.4876 21.8392 9.90837C21.4614 7.32917 20.1378 4.98271 18.1257 3.32541C16.1137 1.66812 13.5571 0.818498 10.9533 0.94182C8.34948 1.06514 5.88465 2.15259 4.03824 3.99263C2.19183 5.83267 1.09587 8.29373 0.963557 10.8971C0.831242 13.5004 1.67203 16.0599 3.32236 18.0777C4.9727 20.0955 7.31458 21.4272 9.89246 21.8139C12.4703 22.2006 15.0999 21.6145 17.2696 20.1698L18.9996 22.2398C19.2085 22.4685 19.4616 22.6524 19.7436 22.7805C20.0257 22.9086 20.3307 22.9781 20.6404 22.9849C20.9501 22.9916 21.2579 22.9355 21.5453 22.8199C21.8326 22.7043 22.0935 22.5315 22.3122 22.3122C22.5309 22.0928 22.7028 21.8314 22.8176 21.5437C22.9323 21.2559 22.9875 20.9479 22.9797 20.6383C22.972 20.3286 22.9015 20.0238 22.7726 19.7421C22.6437 19.4605 22.4589 19.208 22.2296 18.9998ZM5.79959 17.0998C4.48987 15.7915 3.67439 14.0695 3.49215 12.2273C3.30991 10.3851 3.7722 8.53674 4.8002 6.99722C5.8282 5.4577 7.3583 4.32234 9.12969 3.78466C10.9011 3.24698 12.8041 3.34026 14.5144 4.0486C16.2247 4.75695 17.6365 6.0365 18.509 7.66918C19.3815 9.30186 19.6608 11.1866 19.2993 13.0021C18.9377 14.8177 17.9577 16.4517 16.5264 17.6256C15.095 18.7995 13.3008 19.4406 11.4496 19.4398C9.33068 19.4388 7.29871 18.5972 5.79959 17.0998Z"
        fill="#EA8140"
      />
      <path
        d="M12.7896 11.1697C13.3954 10.8687 13.8816 10.3718 14.1695 9.75966C14.4573 9.14751 14.5298 8.45605 14.3752 7.79751C14.2206 7.13897 13.848 6.552 13.3178 6.13188C12.7876 5.71177 12.131 5.48315 11.4546 5.48315C10.7782 5.48315 10.1216 5.71177 9.59139 6.13188C9.06123 6.552 8.6886 7.13897 8.534 7.79751C8.3794 8.45605 8.4519 9.14751 8.73973 9.75966C9.02755 10.3718 9.51382 10.8687 10.1196 11.1697C8.3496 11.5897 6.5496 12.7497 6.1196 14.3197C6.02276 14.7149 6.07622 15.1318 6.2696 15.4897C6.41255 15.7175 6.58023 15.9288 6.7696 16.1197C8.03046 17.3505 9.72261 18.0395 11.4846 18.0395C13.2466 18.0395 14.9387 17.3505 16.1996 16.1197C16.3857 15.9284 16.55 15.7172 16.6896 15.4897C16.8911 15.1347 16.9484 14.7158 16.8496 14.3197C16.3596 12.7497 14.5596 11.5897 12.7896 11.1697Z"
        fill="#EA8140"
      />
    </svg>
  ),
  IconCategoryGroup: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.5368 12.09C14.7468 12.09 13.1268 12.86 11.9668 14.09C10.7968 12.86 9.18683 12.09 7.39683 12.09C4.09683 12.09 1.36683 14.7 1.00683 18.06C0.95683 18.5 1.18683 18.93 1.59683 19.11C4.37683 20.3 7.99683 21.03 11.9668 21.03C15.9368 21.03 19.5568 20.3 22.3368 19.11C22.7468 18.94 22.9668 18.5 22.9268 18.06C22.5668 14.7 19.8468 12.09 16.5368 12.09Z"
        fill="#EA8140"
      />
      <path
        d="M7.00683 11.12C9.24911 11.12 11.0668 9.30228 11.0668 7.06C11.0668 4.81772 9.24911 3 7.00683 3C4.76455 3 2.94683 4.81772 2.94683 7.06C2.94683 9.30228 4.76455 11.12 7.00683 11.12Z"
        fill="#EA8140"
      />
      <path
        d="M16.9168 11.12C19.1591 11.12 20.9768 9.30228 20.9768 7.06C20.9768 4.81772 19.1591 3 16.9168 3C14.6746 3 12.8568 4.81772 12.8568 7.06C12.8568 9.30228 14.6746 11.12 16.9168 11.12Z"
        fill="#EA8140"
      />
    </svg>
  ),
  IconCategoryRestaurant: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.84967 2C4.18967 2 2.30967 4.67 2.02967 7.93C1.77967 10.71 3.13967 12.67 4.96967 13.47C5.16967 13.56 5.29967 13.75 5.27967 13.97L4.80967 19.32C4.70967 20.47 5.50967 21.57 6.66967 21.67C7.96967 21.78 9.01967 20.71 8.90967 19.44L8.42967 13.97C8.40967 13.75 8.53967 13.56 8.73967 13.47C10.5697 12.67 11.9197 10.71 11.6797 7.93C11.3897 4.69 9.51967 2 6.85967 2H6.84967Z"
        fill="#91969E"
      />
      <path
        d="M21.9697 8.3L21.4097 3.15C21.3597 2.69 20.9797 2.35 20.5197 2.35C20.0197 2.35 19.6197 2.75 19.6197 3.25V7.18H18.3397V3.2C18.3397 2.73 17.9597 2.35 17.4897 2.35C17.0197 2.35 16.6397 2.73 16.6397 3.2V7.18H15.3597V3.25C15.3597 2.75 14.9497 2.34 14.4497 2.34C13.9897 2.34 13.6097 2.68 13.5497 3.13L12.8697 8.29C12.6397 10.86 13.8697 12.69 15.5497 13.47C15.7497 13.56 15.8697 13.75 15.8497 13.97L15.3697 19.45C15.3597 19.57 15.3597 19.69 15.3697 19.81C15.4697 21 16.5897 21.92 17.8797 21.64C18.8997 21.42 19.5597 20.41 19.4697 19.37L18.9997 13.97C18.9797 13.76 19.1097 13.56 19.2997 13.47C20.9697 12.69 22.1997 10.86 21.9797 8.29L21.9697 8.3Z"
        fill="#91969E"
      />
    </svg>
  ),
  IconCategoryBizprofile: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.8889 7.86L20.7189 3.73C20.5989 3.3 20.2089 3 19.7589 3H4.26893C3.81893 3 3.42893 3.3 3.30893 3.73L2.13893 7.86C1.58893 9.79 2.71893 11.86 4.69893 12.21C6.44893 12.52 7.98893 11.46 8.46893 9.93H8.82893C9.25892 11.28 10.5089 12.26 11.9989 12.26H12.0289C13.5189 12.26 14.7689 11.28 15.1989 9.93H15.5589C16.0489 11.46 17.5789 12.52 19.3289 12.21C21.3089 11.86 22.4289 9.79 21.8889 7.86Z"
        fill="#E8AE2F"
      />
      <path
        d="M19.3689 13.44C19.1489 13.47 18.9289 13.49 18.7089 13.49C17.3889 13.49 16.1989 12.93 15.3689 12.03C14.5289 12.93 13.3289 13.49 11.9989 13.49C10.6689 13.49 9.48892 12.93 8.65893 12.03C7.82893 12.93 6.63893 13.49 5.31893 13.49C5.09893 13.49 4.87893 13.47 4.65893 13.44C4.28893 13.39 3.92893 13.28 3.59893 13.14V20.08C3.59893 20.63 4.04893 21.08 4.59893 21.08H19.4489C19.9989 21.08 20.4489 20.63 20.4489 20.08V13.14C20.1089 13.28 19.7589 13.38 19.3889 13.44H19.3689ZM14.0189 19.08H10.0189V17.58C10.0189 16.48 10.9189 15.58 12.0189 15.58C13.1189 15.58 14.0189 16.48 14.0189 17.58V19.08Z"
        fill="#E8AE2F"
      />
    </svg>
  ),
  IconCategoryAd: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.97 1.89001L7.12001 3.88001C4.02001 4.45001 1.76001 7.15001 1.76001 10.31C1.76001 12.85 3.24001 15.08 5.43001 16.15L5.73001 19.61C5.87001 21.24 7.38001 22.4 8.99001 22.11C10.6 21.83 11.62 20.22 11.2 18.64L10.87 17.41L17.97 18.71C18.28 18.77 18.56 18.53 18.56 18.22V2.39001C18.56 2.08001 18.28 1.84001 17.97 1.90001V1.89001Z"
        fill="#EA8140"
      />
      <path
        d="M19.76 6.86011V13.7401C21.4 13.4501 22.65 12.0301 22.65 10.3001C22.65 8.57011 21.4 7.15011 19.76 6.86011Z"
        fill="#EA8140"
      />
    </svg>
  ),
  IconCategoryCafe: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.8326 6.6C21.2826 6.28 20.6626 6.13 20.0426 6.13C19.8926 6.13 19.7426 6.15 19.5926 6.17C19.6726 5.49 19.7426 4.92 19.7826 4.55C19.8226 4.25 19.5826 4 19.2826 4H1.50263C1.20263 4 0.972634 4.26 1.00263 4.56L2.51263 17.38C2.75263 19.39 4.45263 20.91 6.48263 20.91H14.2826C16.3126 20.91 18.0126 19.4 18.2526 17.38C18.2926 17 18.3426 16.61 18.3926 16.21C20.0526 16.19 21.8126 15.11 22.8626 13.3C24.3226 10.78 23.8526 7.78 21.8226 6.61L21.8326 6.6ZM21.1426 12.29C20.4626 13.47 19.4526 14.06 18.6426 14.18C18.8926 12.09 19.1326 9.99 19.3426 8.24C19.5926 8.16 19.8226 8.12 20.0326 8.12C20.3226 8.12 20.5926 8.19 20.8226 8.32C21.8826 8.93 22.0226 10.74 21.1326 12.28L21.1426 12.29Z"
        fill="#E8AE2F"
      />
    </svg>
  ),
  IconCategoryTruck: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.94 13.25L20.57 6.73C20.21 5.74 19.27 5.09 18.22 5.09H13.39V4C13.39 3.45 12.94 3 12.39 3H2C1.45 3 1 3.45 1 4V18.45C1 18.73 1.22 18.95 1.5 18.95H4.36C4.36 20.37 5.51 21.53 6.94 21.53C8.37 21.53 9.52 20.38 9.52 18.95H14.51C14.51 20.37 15.66 21.53 17.09 21.53C18.52 21.53 19.67 20.38 19.67 18.95H22.53C22.81 18.95 23.03 18.73 23.03 18.45V13.59C23.03 13.47 23.01 13.36 22.97 13.25H22.94ZM11.39 13.4H3V5H11.39V13.4ZM18.11 11.26C18.11 11.37 18.02 11.46 17.91 11.46H15.81C15.7 11.46 15.61 11.37 15.61 11.26V9.16C15.61 9.05 15.7 8.96 15.81 8.96H17.91C18.02 8.96 18.11 9.05 18.11 9.16V11.26Z"
        fill="#91969E"
      />
    </svg>
  ),
  IconCategoryFitness: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.9 7H20.72V5.5C20.72 4.12 19.6 3 18.22 3C16.84 3 15.72 4.12 15.72 5.5V10H9.18V5.5C9.18 4.12 8.06 3 6.68 3C5.3 3 4.18 4.12 4.18 5.5V7H3C1.9 7 1 7.9 1 9V14C1 15.1 1.9 16 3 16H4.18V17.5C4.18 18.88 5.3 20 6.68 20C8.06 20 9.18 18.88 9.18 17.5V13H15.72V17.5C15.72 18.88 16.84 20 18.22 20C19.6 20 20.72 18.88 20.72 17.5V16H21.9C23 16 23.9 15.1 23.9 14V9C23.9 7.9 23 7 21.9 7Z"
        fill="#3585F0"
      />
    </svg>
  ),
  IconCategoryBeauty: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.3066 16.4057C20.5466 14.8257 19.0166 13.9657 17.4566 13.9657C16.9766 13.9657 16.4866 14.0557 16.0166 14.2257L15.1666 13.2057C16.3266 12.6857 17.3966 11.9057 18.2666 10.8657C20.2366 8.51569 20.7466 5.43569 19.9066 2.71569C19.6766 1.95569 18.6866 1.74569 18.1766 2.35569L11.8566 9.88569L5.53659 2.36569C5.02659 1.75569 4.03659 1.96569 3.80659 2.72569C2.96659 5.45569 3.47659 8.52569 5.44659 10.8757C6.31659 11.9157 7.38659 12.6957 8.54659 13.2157L7.69659 14.2357C7.22659 14.0657 6.74659 13.9757 6.25659 13.9757C4.69659 13.9757 3.16659 14.8357 2.40659 16.4157C1.61659 18.0457 2.00659 20.0757 3.32659 21.3157C4.16659 22.1057 5.21659 22.4857 6.24659 22.4857C7.58659 22.4857 8.90659 21.8557 9.73659 20.6757C9.76659 20.6257 11.8566 17.1557 11.8566 17.1557C11.8566 17.1557 13.9366 20.6257 13.9666 20.6757C14.7966 21.8557 16.1166 22.4857 17.4566 22.4857C18.4866 22.4857 19.5366 22.1057 20.3766 21.3157C21.6966 20.0757 22.0766 18.0457 21.2966 16.4157L21.3066 16.4057ZM8.10659 19.5157C7.68659 20.1157 6.99659 20.4757 6.25659 20.4757C5.79659 20.4757 5.34659 20.3357 4.96659 20.0657C3.94659 19.3557 3.69659 17.9457 4.41659 16.9257C4.83659 16.3257 5.52659 15.9657 6.26659 15.9657C6.72659 15.9657 7.17659 16.1057 7.55659 16.3757C8.04659 16.7257 8.37659 17.2357 8.48659 17.8257C8.58659 18.4157 8.45659 19.0157 8.11659 19.5057L8.10659 19.5157ZM11.8566 14.5357C11.1366 14.5357 10.5566 13.9557 10.5566 13.2357C10.5566 12.5157 11.1366 11.9357 11.8566 11.9357C12.5766 11.9357 13.1566 12.5157 13.1566 13.2357C13.1566 13.9557 12.5766 14.5357 11.8566 14.5357ZM19.6766 18.6157C19.5766 19.2057 19.2466 19.7257 18.7466 20.0657C18.3666 20.3357 17.9166 20.4757 17.4566 20.4757C16.7166 20.4757 16.0266 20.1157 15.6066 19.5157C15.2566 19.0257 15.1266 18.4257 15.2366 17.8357C15.3366 17.2457 15.6666 16.7257 16.1666 16.3857C16.5466 16.1157 16.9966 15.9757 17.4566 15.9757C18.1966 15.9757 18.8866 16.3357 19.3066 16.9357C19.6566 17.4257 19.7866 18.0257 19.6766 18.6157Z"
        fill="#D15FCC"
      />
    </svg>
  ),
  IconCategoryBeautyshop: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.5001 1.83003C14.5001 1.39003 14.1401 1.03003 13.7001 1.03003H10.2901C9.85005 1.03003 9.49005 1.39003 9.49005 1.83003V7.92003H14.4901V1.83003H14.5001Z"
        fill="#EA8140"
      />
      <path
        d="M8.46005 9.12003C4.99005 9.12003 2.57005 12.57 3.76005 15.83L5.92005 21.75C6.06005 22.15 6.44005 22.41 6.86005 22.41H17.1501C17.5701 22.41 17.9501 22.15 18.0901 21.75L20.2501 15.83C21.4401 12.57 19.0201 9.12003 15.5501 9.12003H8.46005ZM14.0101 16.75L10.0101 16.78C9.46005 16.78 9.01005 16.34 9.01005 15.79C9.01005 15.24 9.45005 14.79 10.0001 14.78L14.0001 14.75C14.5501 14.75 15.0001 15.19 15.0001 15.74C15.0001 16.29 14.5601 16.74 14.0101 16.75Z"
        fill="#EA8140"
      />
    </svg>
  ),
  IconCategoryConstruction: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.2546 6.85066C21.1046 6.53066 20.6846 6.44066 20.4346 6.69066L17.0146 10.1107L13.8246 6.92066L17.2446 3.50066C17.4946 3.25066 17.4046 2.83066 17.0846 2.68066C14.4846 1.49066 11.4846 1.83066 9.37461 3.94066C7.26461 6.05066 6.93461 8.95066 8.05461 11.5207L3.40461 15.4207C1.79461 16.7707 1.48461 19.2807 2.91461 20.8207C4.41461 22.4407 6.97461 22.3607 8.37461 20.6907L12.4146 15.8807C14.9846 17.0007 17.9146 16.6407 19.9946 14.5607C22.1146 12.4407 22.4446 9.45066 21.2546 6.85066ZM6.45461 19.2607C5.96461 19.7507 5.17461 19.7507 4.68461 19.2607C4.19461 18.7707 4.19461 17.9807 4.68461 17.4907C5.17461 17.0007 5.96461 17.0007 6.45461 17.4907C6.94461 17.9807 6.94461 18.7707 6.45461 19.2607Z"
        fill="#91969E"
      />
    </svg>
  ),
  IconCategoryClass: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.73 6.96C20.75 3.91 16.9 2 12.52 2C6.71 2 2 6.28 2 11.56C2 16.84 6.71 21.12 12.52 21.12C15 21.12 17.44 20.59 19.08 19.02C19.98 18.16 20.11 16.8 19.15 16C18.57 15.52 18.25 14.98 18.25 14.42C18.25 13.6 18.97 12.89 20.1 12.21C22.1 11.01 22.28 8.68 21.72 6.95L21.73 6.96ZM6.35 12.25C5.66 12.25 5.1 11.69 5.1 11C5.1 10.31 5.66 9.75 6.35 9.75C7.04 9.75 7.6 10.31 7.6 11C7.6 11.69 7.04 12.25 6.35 12.25ZM10.33 7.74C9.64 7.74 9.08 7.18 9.08 6.49C9.08 5.8 9.64 5.24 10.33 5.24C11.02 5.24 11.58 5.8 11.58 6.49C11.58 7.18 11.02 7.74 10.33 7.74ZM13.63 18.1C12.8 18.1 12.13 17.43 12.13 16.6C12.13 15.77 12.8 15.1 13.63 15.1C14.46 15.1 15.13 15.77 15.13 16.6C15.13 17.43 14.46 18.1 13.63 18.1ZM16.33 8.47C15.64 8.47 15.08 7.91 15.08 7.22C15.08 6.53 15.64 5.97 16.33 5.97C17.02 5.97 17.58 6.53 17.58 7.22C17.58 7.91 17.02 8.47 16.33 8.47Z"
        fill="#D15FCC"
      />
    </svg>
  ),
  IconCategoryLife: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.65 1.3675C22.16 0.8775 21.37 0.8775 20.88 1.3675L15.54 6.7075L13.75 4.9175C13.26 4.4275 12.47 4.4275 11.98 4.9175C11.49 5.4075 11.49 6.1975 11.98 6.6875L12.29 6.9975C10.25 7.8675 8 8.3475 5.64 8.3475C4.31 8.3475 3.03 8.1775 1.79 7.8975C1.55 7.8475 1.06 7.8075 1.02 8.3175C1 8.5175 1 8.7275 1 8.9275C1 10.5875 1.31 12.1875 1.86 13.6575C3.6 13.5575 5.3 13.1175 6.88 12.3875C7.14 12.2675 7.35 12.6275 7.12 12.8075C5.75 13.8875 4.19 14.6775 2.53 15.1775C3.44 16.9275 4.72 18.4675 6.25 19.6575C8.05 18.7075 9.62 17.3975 10.83 15.7975C11 15.5675 11.36 15.7975 11.24 16.0475C10.44 17.8275 9.27 19.4175 7.83 20.7175C9.33 21.5875 11 22.1775 12.8 22.4175C13.15 22.4575 13.51 22.3075 13.72 22.0175C15.75 19.1575 16.95 15.6775 16.95 11.9075C16.95 11.8275 16.95 11.7375 16.95 11.6575L17.32 12.0275C17.56 12.2675 17.88 12.3975 18.2 12.3975C18.52 12.3975 18.84 12.2775 19.08 12.0275C19.57 11.5375 19.57 10.7475 19.08 10.2575L17.29 8.4675L22.63 3.1275C23.12 2.6375 23.12 1.8475 22.63 1.3575L22.65 1.3675Z"
        fill="#EA8140"
      />
    </svg>
  ),
  IconCategoryAcademy: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_20811_23252)">
        <path
          d="M22.7201 7.50998C22.7201 7.11998 22.5001 6.72998 22.0601 6.56998L12.4301 3.06998C11.8801 2.86998 11.2701 2.86998 10.7201 3.06998L1.09005 6.57998C0.210054 6.89998 0.210054 8.13998 1.09005 8.45998L10.7201 11.97C11.2701 12.17 11.8801 12.17 12.4301 11.97L21.1201 8.80998V12.05C21.1201 12.49 21.4801 12.85 21.9201 12.85C22.3601 12.85 22.7201 12.49 22.7201 12.05V7.50998Z"
          fill="#3EBC5A"
        />
        <path
          d="M19.0401 10.83L12.8501 13.08C12.4401 13.23 12.0201 13.3 11.5801 13.3C11.1401 13.3 10.7201 13.22 10.3101 13.08L4.11005 10.83L2.62005 19.26C2.54005 19.74 2.80005 20.21 3.25005 20.37C5.67005 21.23 8.51005 21.73 11.5601 21.73C14.6101 21.73 17.4501 21.23 19.8701 20.37C20.3201 20.21 20.5901 19.73 20.5001 19.26L19.0101 10.83H19.0401Z"
          fill="#3EBC5A"
        />
      </g>
      <defs>
        <clipPath id="clip0_20811_23252">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  IconCategoryHomerepair: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.7401 7.77H19.9001V4.83C19.9001 4.32 19.5101 3.89 19.0001 3.84L5.32005 2.37C3.54005 2.18 1.99005 3.57 1.99005 5.35V18.99C1.99005 20.53 3.24005 21.78 4.79005 21.78C6.44005 21.78 7.73005 20.37 7.58005 18.74L7.35005 16.23L19.1201 13.71C19.5801 13.61 19.9101 13.2 19.9101 12.73V9.77H22.7501C23.3001 9.77 23.7501 9.32 23.7501 8.77C23.7501 8.22 23.3001 7.77 22.7501 7.77H22.7401ZM13.7901 9.77H8.01005C7.46005 9.77 7.01005 9.32 7.01005 8.77C7.01005 8.22 7.46005 7.77 8.01005 7.77H13.7901C14.3401 7.77 14.7901 8.22 14.7901 8.77C14.7901 9.32 14.3401 9.77 13.7901 9.77Z"
        fill="#3EBC5A"
      />
    </svg>
  ),
  IconCategoryFarm: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.5782 10.395C20.9982 8.68499 19.7282 7.29499 17.9582 6.78499C16.2482 6.29499 14.4682 6.65499 12.9982 7.60499C12.8982 7.08499 12.7682 6.57499 12.5882 6.07499C13.3982 6.00499 14.3882 5.70499 15.2282 4.80499C15.9282 4.05499 16.3582 3.09499 16.3582 2.07499C16.3582 2.07499 13.5682 1.56499 12.0882 3.20499C11.8782 3.43499 11.7082 3.67499 11.5482 3.93499C11.1682 3.35499 10.7382 2.80499 10.2482 2.31499C9.85816 1.92499 9.21816 1.92499 8.83816 2.31499C8.44816 2.70499 8.44816 3.33499 8.83816 3.72499C9.85816 4.74499 10.5982 6.11499 10.9482 7.56499C9.48816 6.63499 7.72816 6.28499 6.03816 6.77499C4.27816 7.28499 2.99816 8.67499 2.41816 10.385C1.70816 12.475 1.95816 14.795 2.74816 16.825C3.28816 18.195 4.13816 19.415 5.16816 20.445C7.39816 22.695 10.5682 22.555 11.9882 21.115C13.4082 22.545 16.5782 22.685 18.8082 20.445C19.8382 19.405 20.6882 18.185 21.2282 16.825C22.0282 14.795 22.2682 12.475 21.5582 10.385L21.5782 10.395ZM9.14816 15.565C8.39816 15.565 7.79816 14.965 7.79816 14.215C7.79816 13.465 8.39816 12.865 9.14816 12.865C9.89816 12.865 10.4982 13.465 10.4982 14.215C10.4982 14.965 9.89816 15.565 9.14816 15.565ZM14.8682 15.565C14.1182 15.565 13.5182 14.965 13.5182 14.215C13.5182 13.465 14.1182 12.865 14.8682 12.865C15.6182 12.865 16.2182 13.465 16.2182 14.215C16.2182 14.965 15.6182 15.565 14.8682 15.565Z"
        fill="#3EBC5A"
      />
    </svg>
  ),
  IconCategoryClassRemoved: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.5 2H5C3.9 2 3 2.9 3 4V18.5C3 20.43 4.57 22 6.5 22H19.5C19.78 22 20 21.78 20 21.5V2.5C20 2.22 19.78 2 19.5 2ZM8.65 6.87H14.35C14.9 6.87 15.35 7.32 15.35 7.87C15.35 8.42 14.9 8.87 14.35 8.87H8.65C8.1 8.87 7.65 8.42 7.65 7.87C7.65 7.32 8.1 6.87 8.65 6.87ZM18 20H6.5C5.67 20 5 19.33 5 18.5C5 17.67 5.67 17 6.5 17H18V20Z"
        fill="#AA7D71"
      />
    </svg>
  ),
  IconCategoryMedical: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.5 2.5H6.5C4.29 2.5 2.5 4.29 2.5 6.5V17.5C2.5 19.71 4.29 21.5 6.5 21.5H17.5C19.71 21.5 21.5 19.71 21.5 17.5V6.5C21.5 4.29 19.71 2.5 17.5 2.5ZM16.75 12.8C16.75 12.91 16.66 13 16.55 13H13V16.55C13 16.66 12.91 16.75 12.8 16.75H11.2C11.09 16.75 11 16.66 11 16.55V13H7.45C7.34 13 7.25 12.91 7.25 12.8V11.2C7.25 11.09 7.34 11 7.45 11H11V7.45C11 7.34 11.09 7.25 11.2 7.25H12.8C12.91 7.25 13 7.34 13 7.45V11H16.55C16.66 11 16.75 11.09 16.75 11.2V12.8Z"
        fill="#3EBC5A"
      />
    </svg>
  ),
  IconCategoryLaundry: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.93 7.16999C19.59 5.24999 17.94 3.85999 15.99 3.85999H6.03995C5.48995 3.85999 5.03995 4.30999 5.03995 4.85999C5.03995 5.40999 5.48995 5.85999 6.03995 5.85999H15.99C16.96 5.85999 17.7899 6.55999 17.9599 7.51999L18.11 8.38999L13.38 9.21999L13.2 8.18999C13.11 7.67999 12.62 7.33999 12.11 7.42999L9.12995 7.96999C8.61995 8.05999 8.27995 8.54999 8.37995 9.05999L8.55995 10.07L7.47995 10.26C4.12995 10.85 1.69995 13.76 1.69995 17.15V20.16C1.69995 20.44 1.91995 20.66 2.19995 20.66H21.7099C22.0199 20.66 22.26 20.38 22.2 20.07L19.92 7.15999L19.93 7.16999ZM16.25 16.47C15.42 16.47 14.75 15.8 14.75 14.97C14.75 14.14 15.42 13.47 16.25 13.47C17.08 13.47 17.75 14.14 17.75 14.97C17.75 15.8 17.08 16.47 16.25 16.47Z"
        fill="#3585F0"
      />
    </svg>
  ),
  IconCategoryLost: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.0101 6.02999H16.5101C16.5001 3.55999 14.4901 1.54999 12.0101 1.54999C9.53006 1.54999 7.53006 3.55999 7.51006 6.02999H4.00006C2.90006 6.02999 2.00006 6.92999 2.00006 8.02999V20.03C2.00006 21.13 2.90006 22.03 4.00006 22.03H20.0101C21.1101 22.03 22.0101 21.13 22.0101 20.03V8.02999C22.0101 6.92999 21.1101 6.02999 20.0101 6.02999ZM12.0101 3.54999C13.3801 3.54999 14.5001 4.65999 14.5101 6.02999H9.51006C9.52006 4.65999 10.6401 3.54999 12.0101 3.54999ZM12.1001 19.12C11.5501 19.12 11.1001 18.67 11.1001 18.12C11.1001 17.57 11.5501 17.12 12.1001 17.12C12.6501 17.12 13.1001 17.57 13.1001 18.12C13.1001 18.67 12.6501 19.12 12.1001 19.12ZM15.0201 12.59C14.7701 13.67 14.0201 14.21 13.4701 14.59C12.9101 14.99 12.7701 15.13 12.7701 15.45C12.7701 15.89 12.4101 16.25 11.9701 16.25C11.5301 16.25 11.1701 15.89 11.1701 15.45C11.1701 14.26 11.9601 13.7 12.5401 13.29C13.0401 12.94 13.3501 12.7 13.4601 12.23C13.5401 11.87 13.4801 11.55 13.2601 11.28C12.9801 10.92 12.4701 10.69 11.9701 10.69C11.2001 10.69 10.5601 11.29 10.5001 12.06C10.4701 12.5 10.1001 12.85 9.65006 12.8C9.21006 12.77 8.88006 12.39 8.91006 11.95C9.02006 10.35 10.3701 9.09999 11.9701 9.09999C12.9601 9.09999 13.9301 9.55999 14.5101 10.29C15.0301 10.94 15.2101 11.76 15.0101 12.6L15.0201 12.59Z"
        fill="#91969E"
      />
    </svg>
  ),
  IconCategoryRecommandation: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.9801 11.21C22.9801 8.5 20.6201 6.3 17.7001 6.29C16.9601 3.84 14.6901 2.06 12.0001 2.06C9.31008 2.06 7.04008 3.84 6.30008 6.29C3.38008 6.3 1.02008 8.5 1.02008 11.21C1.02008 13.45 2.64008 15.31 4.84008 15.91L3.86008 21.43C3.81008 21.74 4.04008 22.02 4.35008 22.02H19.6401C19.9501 22.02 20.1901 21.74 20.1301 21.43L19.1501 15.91C21.3501 15.31 22.9701 13.44 22.9701 11.21H22.9801ZM15.5501 13.03L14.1201 14.63L14.3301 16.8C14.3401 16.95 14.1901 17.06 14.0501 17L12.0701 16.12L10.0901 17C9.95008 17.06 9.79008 16.95 9.81008 16.8L10.0201 14.63L8.59008 13.03C8.49008 12.92 8.55008 12.74 8.69008 12.7L10.8001 12.22L11.8901 10.37C11.9701 10.24 12.1601 10.24 12.2301 10.37L13.3201 12.22L15.4301 12.7C15.5801 12.73 15.6401 12.92 15.5301 13.03H15.5501Z"
        fill="#AA7D71"
      />
    </svg>
  ),
  IconCategoryBuytogether: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_20811_23249)">
        <path
          d="M22.1601 7.42001H13.3401L10.9801 2.36001C10.6901 1.73001 9.94006 1.46001 9.32006 1.76001C8.69006 2.05001 8.42006 2.80001 8.72006 3.42001L10.5901 7.42001H1.84006C1.15006 7.42001 0.590057 7.98001 0.590057 8.67001C0.590057 9.36001 1.15006 9.92001 1.84006 9.92001H2.41006L4.28006 20.51C4.36006 20.99 4.78006 21.34 5.26006 21.34H18.7401C19.2301 21.34 19.6401 20.99 19.7201 20.51L21.5901 9.92001H22.1601C22.8501 9.92001 23.4101 9.36001 23.4101 8.67001C23.4101 7.98001 22.8501 7.42001 22.1601 7.42001ZM10.2901 17.09C10.2901 17.53 9.93006 17.89 9.49006 17.89C9.05006 17.89 8.69006 17.53 8.69006 17.09V12.97C8.69006 12.53 9.05006 12.17 9.49006 12.17C9.93006 12.17 10.2901 12.53 10.2901 12.97V17.09ZM15.3101 17.09C15.3101 17.53 14.9501 17.89 14.5101 17.89C14.0701 17.89 13.7101 17.53 13.7101 17.09V12.97C13.7101 12.53 14.0701 12.17 14.5101 12.17C14.9501 12.17 15.3101 12.53 15.3101 12.97V17.09Z"
          fill="#A77D71"
        />
      </g>
      <defs>
        <clipPath id="clip0_20811_23249">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  IconCategoryPopularity: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.81 6.58C18.62 6.39 18.31 6.39 18.11 6.58L16.71 7.9C16.71 7.9 15.9 4.42 12.34 1.92C12.05 1.72 11.68 1.69 11.36 1.83C9.23001 2.78 1.36001 6.84 2.71001 15.01C3.33001 18.75 6.73001 21.65 10.66 22.16C16.23 22.89 21.14 19.01 21.42 13.77C21.56 11.08 21.07 8.81 18.81 6.57V6.58ZM12.06 19.87C10.22 19.87 8.73001 18.41 8.73001 16.57C8.73001 14.03 12.07 12.17 12.06 12.17C12.06 12.17 15.39 14.02 15.39 16.57C15.39 18.41 13.9 19.87 12.06 19.87Z"
        fill="#E15D64"
      />
    </svg>
  ),

  IconCategoryQuestions: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.59 17.14C21.48 15.64 22.01 13.9 22.01 12.03C22.01 6.51003 17.53 2.03003 12.01 2.03003C6.49 2.03003 2 6.50003 2 12.03C2 17.56 6.48 22.03 12 22.03C13.87 22.03 15.61 21.51 17.11 20.61L20.18 21.43C20.92 21.63 21.6 20.95 21.4 20.21L20.58 17.14H20.59ZM16.89 16.81C16.73 16.97 16.53 17.04 16.32 17.04C16.11 17.04 15.91 16.96 15.75 16.81L15.05 16.11C14.19 16.75 13.14 17.15 12 17.15C9.18 17.15 6.88 14.85 6.88 12.03C6.88 9.21003 9.18 6.91003 12 6.91003C14.82 6.91003 17.12 9.21003 17.12 12.03C17.12 13.13 16.77 14.14 16.18 14.97L16.89 15.68C17.2 15.99 17.2 16.5 16.89 16.81Z"
        fill="#358EF9"
      />
      <path
        d="M12.94 12.86C13.25 12.55 13.76 12.55 14.07 12.86L15.02 13.81C15.33 13.29 15.52 12.68 15.52 12.03C15.52 10.09 13.94 8.51003 12 8.51003C10.06 8.51003 8.48 10.09 8.48 12.03C8.48 13.97 10.06 15.55 12 15.55C12.71 15.55 13.36 15.34 13.92 14.98L12.94 14C12.63 13.69 12.63 13.18 12.94 12.87V12.86Z"
        fill="#358EF9"
      />
    </svg>
  ),
  IconCategoryTogether: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 3.40001H17.5V2.32001C17.5 1.77001 17.05 1.32001 16.5 1.32001C15.95 1.32001 15.5 1.77001 15.5 2.32001V3.40001H8.51V2.32001C8.51 1.77001 8.06 1.32001 7.51 1.32001C6.96 1.32001 6.51 1.77001 6.51 2.32001V3.40001H5.01C3.91 3.40001 3.01 4.30001 3.01 5.40001V19.4C3.01 20.5 3.91 21.4 5.01 21.4H19.01C20.11 21.4 21.01 20.5 21.01 19.4V5.40001C21.01 4.30001 20.11 3.40001 19.01 3.40001H19ZM15.44 14.08L14.06 15.62L14.26 17.7C14.28 17.86 14.11 17.98 13.97 17.91L12.07 17.06L10.17 17.91C10.02 17.98 9.86 17.86 9.88 17.7L10.08 15.62L8.7 14.08C8.59 13.96 8.65 13.77 8.81 13.74L10.84 13.28L11.89 11.5C11.97 11.36 12.17 11.36 12.25 11.5L13.3 13.28L15.33 13.74C15.48 13.78 15.54 13.96 15.44 14.08ZM19 8.40001H5V5.40001H19V8.40001Z"
        fill="#E8AE2F"
      />
    </svg>
  ),
  IconCategoryPet: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.98875 7.41179C10.3384 7.05015 11.1127 5.56339 10.7182 4.09102C10.3237 2.61866 8.90973 1.71824 7.56006 2.07988C6.21039 2.44152 5.43609 3.92828 5.83061 5.40065C6.22513 6.87301 7.63908 7.77343 8.98875 7.41179Z"
        fill="#AA7D71"
      />
      <path
        d="M4.96975 11.6066C6.17983 10.908 6.54295 9.27146 5.7808 7.95137C5.01864 6.63128 3.41983 6.1275 2.20975 6.82614C0.999674 7.52478 0.636557 9.16129 1.39871 10.4814C2.16086 11.8015 3.75967 12.3052 4.96975 11.6066Z"
        fill="#AA7D71"
      />
      <path
        d="M17.2868 5.40146C17.6813 3.92909 16.907 2.44233 15.5574 2.08069C14.2077 1.71905 12.7938 2.61947 12.3992 4.09183C12.0047 5.5642 12.779 7.05096 14.1287 7.4126C15.4784 7.77424 16.8923 6.87382 17.2868 5.40146Z"
        fill="#AA7D71"
      />
      <path
        d="M21.723 10.4846C22.4851 9.16452 22.122 7.52802 20.9119 6.82937C19.7018 6.13073 18.103 6.63452 17.3409 7.9546C16.5787 9.27469 16.9418 10.9112 18.1519 11.6098C19.362 12.3085 20.9608 11.8047 21.723 10.4846Z"
        fill="#AA7D71"
      />
      <path
        d="M17.7597 12.8141C16.4097 10.7141 14.1197 9.62413 11.5597 9.62413C9.00967 9.62413 6.70967 10.7241 5.35967 12.8141C3.69967 15.3941 3.97967 18.3341 3.99967 18.5041C4.05967 20.1341 5.40967 21.4341 7.04967 21.4341C7.36967 21.4341 7.67967 21.3841 7.96967 21.2941C8.21967 21.2241 8.62967 21.0941 9.23967 20.8341C10.1397 20.4541 11.2297 20.3941 11.5597 20.3841C11.8897 20.3841 12.9797 20.4541 13.8797 20.8341C14.4897 21.0941 14.8997 21.2241 15.1497 21.2941C15.4397 21.3841 15.7497 21.4341 16.0697 21.4341C17.7197 21.4341 19.0597 20.1341 19.1197 18.5041C19.1297 18.3341 19.4197 15.3941 17.7597 12.8141Z"
        fill="#AA7D71"
      />
    </svg>
  ),
  IconCategoryCare: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.6711 8.18986C19.4711 8.02986 19.1811 8.06986 19.0111 8.24986C17.8611 9.43986 16.3911 10.3199 14.7411 10.7599C15.4411 9.64985 15.7711 8.28986 15.5511 6.84985C15.1811 4.33985 13.1011 2.32985 10.5811 2.03985C7.91112 1.72985 5.56112 3.25986 4.62112 5.52986L2.55112 5.34985C2.21112 5.31985 1.94112 5.62985 2.01112 5.95985C2.29112 7.21985 3.15112 8.24985 4.29112 8.79985C4.48112 9.76985 4.91112 10.6599 5.52112 11.3899C4.46112 12.1699 3.67112 13.3199 3.38112 14.6399C2.93112 16.6799 3.58112 18.5799 4.86112 19.8699C4.86112 19.8699 7.74112 23.5199 15.0911 22.6599C19.5011 22.1299 22.7911 18.8899 22.7911 14.5599C22.7911 11.9699 21.5711 9.66986 19.6711 8.17986V8.18986ZM8.60112 8.49986C7.92112 8.49986 7.36112 7.94986 7.36112 7.25986C7.36112 6.56986 7.91112 6.01986 8.60112 6.01986C9.29112 6.01986 9.84112 6.56986 9.84112 7.25986C9.84112 7.94986 9.29112 8.49986 8.60112 8.49986Z"
        fill="#E8AE2F"
      />
    </svg>
  ),
};
