import background from "../img/black-gold.png";
import ic from "../img/ic.png";

const ZuzannaSarna: React.FC = () => {
  return (
    <div
      className="absolute inset-0 w-[100vw] h-[100vh] z-10 bg-cover flex flex-col items-center overflow-x-hidden"
      style={{ backgroundImage: `url(${background})`, fontFamily: "Poppins, Roboto, sans-serif" }}
    >
      <div className="max-w-[100vw] mt-20 md:mt-0 flex flex-col p-[2vw] md:p-[5vw] items-center gap-y-6 md:gap-y-6">
        <a
          className="flex absolute md:static left-6 top-6 items-center"
          href="https://investcuffs.pl/"
        >
          <img
            src={ic}
            alt="InvestCuffs"
            className="w-[100px]"
          />
          <div className="font-bold text-[80px] text-[#b79f5b]">2024</div>
        </a>
        <img
          className="rounded-[999px] min-w-[300px] w-[20vw] md:w-[90vw]"
          src="https://media.licdn.com/dms/image/D4D03AQH2vXceSQD_vA/profile-displayphoto-shrink_800_800/0/1688985902064?e=1698278400&v=beta&t=OkbMd_do1WoF0a4AYYEpOX0NfEunc43v5rGt8gMssMc"
          alt="Zuzanna Sarna"
        />
        <div className="text-center text-[72px] md:text-[50px] font-bold">Zuzanna Sarna</div>
        <div className="flex flex-row md:flex-col gap-x-24 md:gap-y-6">
          <div className="flex flex-col flex-1 gap-y-6 md:gap-y-2">
            <div className="font-bold text-[40px] md:text-[30px]">STARCOMP</div>
            <div className="text-[30px] md:text-[22px]">COORDINATOR FOR CONTACT WITH EXHIBITORS</div>
          </div>
          <div className="flex flex-col flex-1 gap-y-4 items-end md:items-center">
            <div className="text-[30px] md:text-[20px]">tel. 797 115 862</div>
            <div className="text-[30px] md:text-[20px]">sarna.zuz@gmail.com</div>
            <div className="flex flex-row py-2 gap-x-6">
              <a href="https://www.linkedin.com/in/zuzanna-sarna-042540238">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1200px-LinkedIn_icon.svg.png"
                  alt="LinkedIn"
                  className="w-[40px]"
                />
              </a>
              <a href="https://t.me/+48797115862">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png"
                  alt="Telegram"
                  className="w-[40px]"
                />
              </a>
              <a href={`mailto:sarna.zuz@gmail.com`}>
                <img
                  src="https://img.freepik.com/darmowe-ikony/gmail_318-674228.jpg"
                  alt="Email"
                  className="w-[40px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZuzannaSarna;
