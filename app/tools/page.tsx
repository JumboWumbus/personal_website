import { Separator } from "@/components/ui/separator";




export default async function Home() {
  return (
    <div className="page-grid">
      <div className="p-4 border-[2px] border-border prose col-span-4 lg:col-span-3 max-w-full">
        <header>
          <h1 className="mb-0">Ben based facts</h1>
          <p className="text-sm mt-0 mb-0">Serving Size 1/4 conversation (about 2 bad jokes)</p>
          <p className="text-sm mt-0 mb-0">Servings Per Life 10,894</p>
        </header>
        <Separator className="my-3 mb-1 h-3" />
        <div >
          <p className="font-bold text-xs my-0 mb-3">Amount per average day</p>
          <Separator />
          <div className="flex flex-row justify-between">
            <div>
              <p className="text-sm font-bold mt-1 mb-2">Tools used <span className="font-normal">to make stuff</span></p>
            </div>
            <p className="mt-1 text-sm mb-2">{"All very cool"}</p>
          </div>
          <Separator className="h-1" />
        </div>
        <div>
          <p className="text-xs font-bold text-right mb-2">Ben comments*</p>
          <Separator />
          <p className="text-sm font-bold mb-2">Development</p>
          <Separator />
          <div className="flex flex-row justify-between place-items-baseline">
            <p className="text-sm my-1 pl-4">Neovim</p>
            <p className="text-xs my-1 mt-0">It does it all plus more!</p>
          </div>

          <div className="flex flex-row justify-between place-items-baseline">
            <p className="text-sm my-1 pl-4">LazyGit</p>
            {/* <Separator className="flex-1 self-center mx-2" /> */}
            <p className="text-xs my-1">Makes git a breeze</p>
          </div>

          <div className="flex flex-row justify-between place-items-baseline">
            <p className="text-sm my-1 pl-4">Ripgrep/fzf</p>
            <p className="text-xs my-1 mt-0">{"Search for files and content"}</p>
          </div>


          <p className="text-sm font-bold my-2">Design</p>
          <Separator />

          <div className="flex flex-row justify-between place-items-baseline">
            <p className="text-sm my-1 pl-4">Dotgrid notebook</p>
            <p className="text-xs my-1 mt-0">Scribbling is quicker</p>
          </div>

          <div className="flex flex-row justify-between place-items-baseline">
            <p className="text-sm my-1 pl-4">Excalidraw</p>
            <p className="text-xs my-1 mt-0">{"Prototyping & explaining"}</p>
          </div>

          <div className="flex flex-row justify-between place-items-baseline">
            <p className="text-sm my-1 pl-4">Figma</p>
            <p className="text-xs my-1 mt-0">{"Very good and confusing"}</p>
          </div>

          <div className="flex flex-row justify-between place-items-baseline">
            <p className="text-sm my-1 pl-4">Adobe suite</p>
            <p className="text-xs my-1 mt-0">{"My pennies are gone!"}</p>
          </div>

          <p className="text-sm font-bold my-2">Compoota</p>
          <Separator />

          <div className="flex flex-row justify-between place-items-baseline">
            <p className="text-sm my-1 pl-4">Omarchy OS</p>
            <p className="text-xs my-1 mt-0">Arch linux distro</p>
          </div>

          <div className="flex flex-row justify-between place-items-baseline">
            <p className="text-sm my-1 pl-4">Gruvbox</p>
            <p className="text-xs my-1 mt-0">My fav theme</p>
          </div>

          <div className="flex flex-row justify-between place-items-baseline">
            <p className="text-sm my-1 pl-4">Ghostty</p>
            <p className="text-xs my-1 mt-0">Cross-platform terminal</p>
          </div>

          <div className="flex flex-row justify-between place-items-baseline">
            <p className="text-sm my-1 pl-4">Zen browser</p>
            <p className="text-xs my-1 mt-0">Quickly becoming my fav browser</p>
          </div>

          <p className="text-sm font-bold my-2">Peripherals</p>
          <Separator />

          <div className="flex flex-row justify-between place-items-baseline">
            <p className="text-sm my-1 pl-4">HotDox V2</p>
            <p className="text-xs my-1 mt-0">Split ortho keyboard</p>
          </div>

          <div className="flex flex-row justify-between place-items-baseline">
            <p className="text-sm my-1 pl-4">ATH-M50xBT2</p>
            <p className="text-xs my-1 mt-0">Versatile headphones</p>
          </div>

          <div className="flex flex-row justify-between place-items-baseline">
            <p className="text-sm my-1 pl-4">AT2020</p>
            <p className="text-xs my-1 mt-0">Microphone on an arm</p>
          </div>

          <div className="flex flex-row justify-between place-items-baseline">
            <p className="text-sm my-1 pl-4">Pioneer DM-40</p>
            <p className="text-xs my-1 mt-0">Big music time</p>
          </div>

          <div className="flex flex-row justify-between place-items-baseline">
            <p className="text-sm my-1 pl-4">G502 Hero</p>
            <p className="text-xs my-1 mt-0">Hardy wired mouse</p>
          </div>

          <div className="flex flex-row justify-between place-items-baseline">
            <p className="text-sm my-1 pl-4">Nelko PLE70-BT</p>
            <p className="text-xs my-1 mt-0">Thermal label printer</p>
          </div>

          <p className="text-sm font-bold my-2">Misc</p>
          <Separator />

          <div className="flex flex-row justify-between place-items-baseline">
            <p className="text-sm my-1 pl-4">Mag flap clipboard</p>
            <p className="text-xs my-1 mt-0">Hung on my shelf w/ todos</p>
          </div>

          <div className="flex flex-row justify-between place-items-baseline">
            <p className="text-sm my-1 pl-4">Ranger bands</p>
            <p className="text-xs my-1 mt-0">Bike inner tube rubber bands</p>
          </div>

          <div className="flex flex-row justify-between place-items-baseline">
            <p className="text-sm my-1 pl-4">Pinecil V2</p>
            <p className="text-xs my-1 mt-0">Smart USB-C soldering iron</p>
          </div>

          <div className="flex flex-row justify-between place-items-baseline">
            <p className="text-sm my-1 pl-4">Casio LF-20W</p>
            <p className="text-xs my-1 mt-0">Sleek, thin watch</p>
          </div>

          <div className="flex flex-row justify-between place-items-baseline">
            <p className="text-sm my-1 pl-4">Cheap HM Aeron chair</p>
            <p className="text-xs my-1 mt-0">2nd hand but functional</p>
          </div>

        </div>
      </div>
      <div className="p-4 border-[2px] border-border prose col-span-4 lg:col-span-5 max-w-full">
        <header>
          <h1 className="mb-0">Additional info</h1>
          <p className="text-sm mt-0">More information about the tools mentioned; because I want to talk about them</p>
          <Separator />
        </header>
        <section>
          <h2 className="mt-4 mb-2">Neovim</h2>
          <p className="text-sm">{`I don't want to sound like a freak but everyone needs to try this stupid program for a week.
          It is the most versatile and useful tool I've ever used in my life. I use it for everything; code, prose, markdown, TODOS.
          I'm not even good at using it; I don't use shortcuts as much as I should. But just navigating and editing text has became
          a frictionless experience.`}</p>
        </section>
        <section>
          <h2 className="mt-4 mb-2">Omarchy</h2>
          <p className="text-sm">{`Up until a year ago I was a windows user. But recently my aging hardware paired with windows
          has caused severe slowdown and made using a computer not fun. I installed arch-linux, screwed up my configuration and
          got annoyed and gave up. After that; I decided to use Omarchy which is basically a pre configured arch-linux. 
          Built for developers and made to work out of the box. I have no complaints and it runs great on my ancient machine.`}</p>
        </section>

        <section>
          <h2 className="mt-4 mb-2">Zen browser</h2>
          <p className="text-sm">{`I liked brave when I was on windows; built in adblock, privacy focused defaults. I got Zen 
          because it's brave but better. It has workspaces and a vertical tab browser that I really like. I was worried I would
          dislike the layout and controls but it has surprised me with how well it runs and how nice the browsing experience is.`}</p>
        </section>

        <section>
          <h2 className="mt-4 mb-2">Keyboard</h2>
          <p className="text-sm">{`I destroyed any evidence I had for not being a nerd when I found out about ortholinear split keyboards. I now prefer them over normal
          keyboards. I further dug myself into a pit when I decided to learn an alternate layout (ISRT). Now I have to use a
          split keyboard with a weird layout because I got curious. Is it worth it? Not for speed; I still type the same. But for comfort
          and removing wrist/arm strain, it is.`}</p>
        </section>

        <section>
          <h2 className="mt-4 mb-2">Ranger bands</h2>
          <p className="text-sm">{`The military and it's functional practicality paired with my interest in it lead me to 
          a thing called 'Ranger bands'. A stronger version of a rubber band that's cheap because it is made out of the inner
          tube of a bicyle tire. You just cut it to size.
          `}</p>
        </section>

        <section>
          <h2 className="mt-4 mb-2">Herman Miller Aeron</h2>
          <p className="text-sm">{`I don't have alot of money so the idea of paying 1500GBP for a chair is crazy. But after my journey down the keyboard
          rabbit hole I got very invested in ergonomics and spine health. I found a cheap second hand Aeron and decided to get it. It's rough and has
          a tear or two in it; but the structural aspects of it still work. I now can't live without it. There's probably a cheaper alternative but
          I've had too many bad chairs and didn't want to risk it.`}</p>
        </section>
      </div>
    </div>

  );

}
