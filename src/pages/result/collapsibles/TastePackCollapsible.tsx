import { Collapsible } from "../../../ui/Collapsible";
import i18n from "i18next";
import { IProductName, ITaste, ITastePack } from "../../../types";
import packs from "../../../assets";
import { TastePack } from "../../../ui/components/TastePack";

export const TastePackCollapsible = ({
  taste,
  product,
  title,
  variant = "dark",
}: {
  taste: ITaste;
  title: string;
  product: IProductName;
  variant?: "light" | "dark";
}) => {
  const tastePacks = packs[i18n.language][product]?.[taste] || [];
  if (tastePacks.length === 0) {
    return null;
  }

  return (
    <Collapsible
      openByDefault
      className="mb-10 w-full pr-[8%]"
      headerTitle={title}
      variant={variant}
    >
      <div className="flex justify-start">
        {tastePacks.map((pack: ITastePack) => (
          <TastePack key={pack.name} tastePack={pack} variant={variant} />
        ))}
      </div>
    </Collapsible>
  );
};
