import type { HomeLayoutProps } from "fumadocs-ui/layouts/home";
import type { DocsLayoutProps } from "fumadocs-ui/layouts/docs";
import { RootToggle } from "fumadocs-ui/components/layout/root-toggle";
import { source } from "@/app/source";
import { modes } from "@/utils/modes";

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: HomeLayoutProps = {
  githubUrl: "https://github.com/daangn/seed-design",
  nav: {
    title: (
      <div className="flex gap-2 justify-center items-center">
        <svg
          width="27"
          height="24"
          viewBox="0 0 27 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>로고</title>
          <path
            d="M9.08623 23.6951C9.7431 23.937 10.3624 23.8829 10.9442 23.5329C11.526 23.1829 11.9522 22.6406 12.2227 21.9061C12.525 21.0852 12.6618 19.7371 12.6331 17.862C12.6202 15.9436 12.9162 14.1635 13.5208 12.5216C14.1359 13.2388 14.6531 13.9322 15.0725 14.6019C15.4919 15.2716 15.841 15.9153 16.1196 16.5331C16.4833 17.354 16.855 18.1533 17.2347 18.931C17.6222 19.6871 18.0456 20.346 18.5048 20.9076C18.964 21.4693 19.4986 21.8624 20.1085 22.087C20.6716 22.2944 21.2162 22.2987 21.7423 22.0999C22.2763 21.8795 22.6309 21.5317 22.8059 21.0564C23.0048 20.5163 22.9455 19.9179 22.6278 19.2612C22.3182 18.5829 21.695 17.924 20.7582 17.2846C20.2898 16.9649 19.798 16.6366 19.2827 16.2996C18.7519 15.9324 18.178 15.5738 17.5609 15.2239C16.3816 14.5197 15.1844 13.5023 13.9694 12.1716C15.7573 11.9468 17.3792 11.9554 18.8354 12.1972C20.2446 12.4218 21.5013 12.5902 22.6056 12.7025C23.6943 12.7845 24.5608 12.6742 25.205 12.3718C25.8572 12.0477 26.2827 11.6156 26.4816 11.0755C26.6646 10.5786 26.6281 10.099 26.3721 9.63673C26.0926 9.1658 25.6479 8.81802 25.038 8.59339C24.4045 8.36012 23.6798 8.33856 22.8639 8.52873C22.0558 8.69729 21.2237 8.96738 20.3675 9.33902C19.5113 9.71065 18.7257 10.0715 18.0107 10.4215C16.9028 10.9703 15.5176 11.3679 13.855 11.6143L14.0101 11.193C14.2488 10.5449 14.4988 9.97455 14.7601 9.48198C15.006 8.95917 15.2708 8.52925 15.5548 8.19222C15.9334 7.74285 16.3594 7.23731 16.8327 6.67559C17.2825 6.10524 17.7009 5.54785 18.0879 5.00343C18.4828 4.4374 18.7479 3.97075 18.8832 3.60349C19.1616 2.84736 19.189 2.15822 18.9652 1.53607C18.7259 0.88367 18.2896 0.440836 17.6562 0.207566C17.0462 -0.017065 16.4426 0.030503 15.8453 0.35027C15.248 0.670037 14.8061 1.21879 14.5197 1.99652C14.2333 2.77425 14.0885 4.1439 14.0854 6.10546C14.0903 8.04542 13.8024 9.80393 13.2216 11.381C12.8403 10.8971 12.5368 10.5277 12.3109 10.2728C12.0931 9.99632 11.9142 9.75869 11.7742 9.55995C11.6422 9.33961 11.4947 9.08903 11.3317 8.8082C11.1767 8.50576 10.9597 8.08235 10.6806 7.53798C9.65104 5.26972 8.88341 3.8094 8.3777 3.15702C7.872 2.50464 7.26725 2.04886 6.56346 1.78967C6.00043 1.58232 5.47156 1.57155 4.97687 1.75738C4.48217 1.94319 4.14333 2.28455 3.96034 2.78143C3.76144 3.32152 3.80906 3.91561 4.10323 4.56368C4.38188 5.18151 4.98163 5.83172 5.90247 6.51432C6.33943 6.84697 6.82729 7.18611 7.36604 7.53172C7.88134 7.8687 8.44355 8.22295 9.05269 8.59448C10.2475 9.3289 11.4876 10.3744 12.773 11.731C11.8791 11.8434 11.0442 11.9039 10.2684 11.9126C9.47708 11.8911 8.72912 11.8242 8.02451 11.7119C6.63876 11.4959 5.38978 11.3426 4.27759 11.252C3.14989 11.1311 2.2522 11.2176 1.58451 11.5114C0.916822 11.8053 0.483526 12.2222 0.284623 12.7623C0.109589 13.2376 0.153855 13.7323 0.417417 14.2464C0.665473 14.7303 1.09448 15.0846 1.70443 15.3092C2.22054 15.4993 2.81979 15.536 3.50216 15.4193C4.18453 15.3026 4.87905 15.1167 5.5857 14.8618C6.3003 14.5852 6.96401 14.3022 7.57682 14.0126C8.16617 13.7145 8.63761 13.4833 8.99114 13.3191C9.70616 12.9691 11.0049 12.6255 12.8874 12.2884L12.7323 12.7096C12.231 14.0707 11.3572 15.503 10.1108 17.0067C8.86432 18.5103 8.1138 19.6078 7.85921 20.2991C7.58074 21.0553 7.56513 21.7487 7.81237 22.3795C8.05166 23.0319 8.47628 23.4704 9.08623 23.6951Z"
            fill="black"
          />
        </svg>
      </div>
    ),
  },
  links: [
    {
      text: "Design",
      url: "/docs/design",
      active: "nested-url",
    },
    {
      text: "React",
      url: "/docs/react",
      active: "nested-url",
    },
  ],
};

export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: source.pageTree,
  nav: {
    ...baseOptions.nav,
    transparentMode: "none",
    children: undefined,
  },

  sidebar: {
    banner: (
      <RootToggle
        options={modes.map((mode) => ({
          url: `/docs/${mode.param}`,
          icon: (
            <mode.icon
              className="size-9 shrink-0 rounded-md bg-gradient-to-t from-fd-background/80 p-1.5"
              style={{
                backgroundColor: `hsl(var(--${mode.param}-color)/.3)`,
                color: `hsl(var(--${mode.param}-color))`,
              }}
            />
          ),
          title: mode.name,
          description: mode.description,
        }))}
      />
    ),
  },
};
