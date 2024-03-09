import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";

export const InsufficientCreditsModal = () => {
  const router = useRouter();

  return (
    <AlertDialog>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex-between">
            <p className="p-16-semibold text-dark-400">積分不足</p>
            <AlertDialogCancel
              className="border-0 p-0 hover:bg-transparent"
              onClick={() => router.push("/profile")}
            >
              <Image
                src="/assets/icons/close.svg"
                alt="credit coins"
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </AlertDialogCancel>
          </div>

          <Image src="/assets/images/stacked-coins.png" alt="credit coins" width={462} height={122} />

          <AlertDialogTitle className="p-24-bold text-dark-600">
            哎呀...看來您的免費積分已經用完了！
          </AlertDialogTitle>

          <AlertDialogDescription className="p-16-regular py-3">
            不過不用擔心 - 您可以透過獲得更多積分來繼續享受我們的服務.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>
            <AlertDialogAction
              className="button w-full bg-purple-gradient bg-cover"
              onClick={() => router.push("/credits")}
            >
              是的，繼續
            </AlertDialogAction>
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
