import cn from "classnames";
import { FC } from "react";
import { FacebookIcon, TelegramIcon, YoutubeIcon } from "./icons";
import Logo from "./logo";

const Footer: FC = () => {
  return (
    <footer className={cn("w-full py-6 bg-muted/30")}>
      <div className={cn("px-4 w-full mx-auto max-w-screen-xl")}>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <Logo />
            <p className="mt-2 text-sm text-muted-foreground max-w-md">
              Join the largest cloud computing community in Mongolia. Learn,
              share, and grow with AWS enthusiasts and professionals.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="text-sm font-medium">Connect with us</div>
            <div className="flex gap-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/aws.mongolia"
                className="flex items-center gap-2 text-muted-foreground hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
              >
                <FacebookIcon />
                <span className="sr-only md:not-sr-only md:text-sm">
                  Facebook
                </span>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://t.me/+fYDhCL-0ofQ2ZjM1"
                className="flex items-center gap-2 text-muted-foreground hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
              >
                <TelegramIcon />
                <span className="sr-only md:not-sr-only md:text-sm">
                  Telegram
                </span>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/@cloud.academy.mongolia"
                className="flex items-center gap-2 text-muted-foreground hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
              >
                <YoutubeIcon />
                <span className="sr-only md:not-sr-only md:text-sm">
                  YouTube
                </span>
              </a>
            </div>
            <div className="text-center text-sm text-muted-foreground mt-4">
              © 2025 Mongolian AWS Community
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
