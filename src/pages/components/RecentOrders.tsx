import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import {
  Card,
  CardDescription,
  CardTitle,
  CardFooter,
} from "../../components/ui/card";
import { Avatar } from "antd";
import { Gift, TrendingUp } from "lucide-react";

const invoices = [
  {
    customersName: "Rakesh Kohali",
    address: "main street, bandra",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    orderStatus: "On the way",
  },
  {
    customersName: "John Doe",
    address: "side street, bandra",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    orderStatus: "Preparing",
  },
  {
    customersName: "Naman Kar",
    address: "down street, bandra",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    orderStatus: "Delivered",
  },
  {
    customersName: "Naman Kar",
    address: "down street, bandra",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    orderStatus: "Preparing",
  },
  {
    customersName: "Naman Kar",
    address: "down street, bandra",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    orderStatus: "Delivered",
  },
];

const RecentOrders = () => {
  return (
    <Card className="border-none bg-muted/50">
      <div className="flex items-center justify-between p-6">
        <div className="flex items-center gap-3">
          <Avatar
            className="text-[#13C925] bg-[#13C9251F]"
            shape="square"
            size={"large"}
            icon={<Gift />}
          />
          <div>
            <CardTitle>Recent orders</CardTitle>
            <CardDescription>January - 2025</CardDescription>
          </div>
        </div>
        <div></div>
      </div>
      <Card className="border-none shadow-none bg-muted/50 px-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Customers name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead className="text-center">Order Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.customersName}>
                <TableCell className="font-medium">
                  {invoice.customersName}
                  <p className="text-muted-foreground">{invoice.address}</p>
                </TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.totalAmount}</TableCell>
                <TableCell className="text-center">
                  <div
                    className={`${
                      invoice.orderStatus === "Delivered"
                        ? `text-[#219653] bg-[#2196531F]`
                        : ``
                    } ${
                      invoice.orderStatus === "On the way"
                        ? `text-[#14AAFF] bg-[#14AAFF1F]`
                        : ``
                    } ${
                      invoice.orderStatus === "Preparing"
                        ? `text-[#F65F42] bg-[#EB57571F]`
                        : ``
                    } py-1 rounded-full`}
                  >
                    {invoice.orderStatus}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
      <CardFooter className="mt-4 flex items-center justify-between">
        <div className="flex items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center leading-none text-muted-foreground">
              Showing recent orders for today
            </div>
          </div>
        </div>

        <a className="text-sm flex" href="">
          See all orders
        </a>
      </CardFooter>
    </Card>
  );
};

export default RecentOrders;
