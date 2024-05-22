import { buttonClasses, tabClasses } from "@mui/base";

const Styles = () => {
  return (
    <style>
      {`
        .CustomTabIntroduction.${tabClasses.selected} {
          background-color: #7B6EF6;
          color: #EBE9FE;
        }
  
        .CustomTabIntroduction.${buttonClasses.disabled} {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .CustomTabsListIntroduction {
            width: 368px;
            height: 56px;
            background-color: rgba(0, 0, 0, .2);
            border-radius: 12px;
            margin-bottom: 88px;
            display: flex;
            align-items: center;
            justify-content: center;
            align-content: space-between;
        }
        
        .CustomTabIntroduction {
            font-family: 'Poppins', sans-serif;
            color: #8E95A9;
            cursor: pointer;
            font-size: 0.875rem;
            font-weight: 600;
            background-color: transparent;
            width: 100%;
            padding: 10px 12px;
            margin: 8px;
            border: none;
            border-radius: 7px;
            display: flex;
            justify-content: center;
            transition: background-color 0.3s ease, color 0.3s ease;
        }
        
        .CustomTabIntroduction:focus {
            color: #fff;
            outline: none;
        }
        
        .CustomTabPanelIntroduction {
            width: 100%;
            font-family: 'IBM Plex Sans', sans-serif;
            font-size: 0.875rem;
            padding: 20px 12px;
            background: transparent;
            border: 1px solid transparent;
            border-radius: 12px;
            opacity: 0.6;
        }
        `}
    </style>
  );
};

export default Styles;
