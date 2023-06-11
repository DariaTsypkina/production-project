import { memo } from "react";
import { useTranslation } from "react-i18next";

const ProfilePage = memo(() => {
  const { t } = useTranslation();

  return (
    <div>
      {t("Profile page")}
    </div>
  );
});

export default ProfilePage;

