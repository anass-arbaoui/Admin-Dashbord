import CardList from "../components/CardList";
import { ProductChart } from "../components/charts/bar-charts";
import Chartpie from "../components/charts/Chartpie";
import VisitorChart from "../components/charts/visitors-chart";
import DateInput from "../components/DateInput";
import TodoList from "../components/TodoList";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 ">
      <div className="bg-primary-foreground p-4 lg:col-span-2 rounded-lg">
        <ProductChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <div className="max-h-100 overflow-y-auto">
          <CardList title="popular" />
        </div>
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <Chartpie />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <DateInput></DateInput>
        <TodoList></TodoList>
      </div>
      <div className="bg-primary-foreground p-4 lg:col-span-2 rounded-lg">
        <VisitorChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <div className="max-h-100 overflow-y-auto">
          <CardList title="Popular Content" />
        </div>
      </div>
    </div>
  );
}
