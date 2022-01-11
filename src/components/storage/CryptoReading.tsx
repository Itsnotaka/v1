import { RiStockFill } from "react-icons/ri";
import { SiBitcoin } from "react-icons/si";
import { ListItem } from "../ListItems";

const CryptoReading = () => {
	return (
		<>
			<ListItem
				icon={SiBitcoin}
				text="Coin Market Cap"
				link="https://coinmarketcap.com/watchlist/"
			/>
			<ListItem
				icon={SiBitcoin}
				text="Coin Base Pro"
				link="https://pro.coinbase.com/"
			/>
			<ListItem
				icon={SiBitcoin}
				text="Coin Base"
				link="https://coinbase.com/"
			/>
			<ListItem
				icon={RiStockFill}
				text="Trading View"
				link="https://www.tradingview.com/"
			/>
		</>
	);
};

export default CryptoReading;
