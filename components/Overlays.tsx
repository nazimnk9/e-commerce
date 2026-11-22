import AddToCartModal from "./AddToCartModal";
import CartOffcanvas from "./CartOffcanvas";
import QuickViewModal from "./QuickViewModal";
import SearchModal from "./SearchModal";
import VariationModal from "./VariationModal";

export default function Overlays() {
  return (
    <>
      <QuickViewModal />
      <SearchModal />
      <CartOffcanvas />
      <AddToCartModal />
      <VariationModal />
    </>
  );
}