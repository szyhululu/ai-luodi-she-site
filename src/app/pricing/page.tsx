import { RedeemForm } from "@/components/RedeemForm";
import OrderPanel from "@/components/OrderPanel";

const benefits = [
  "全部 Skills 安装包（可装即用，免费开放）",
  "全部 AI 工作流源文件 + 可复制提示词（¥68 解锁）",
  "提示词库与基础资料包（¥68 解锁）",
  "终身访问，持续更新",
  "可加入 AI落地社 社群",
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold">¥68 解锁全栈学习资料</h1>
        <p className="mt-3 text-stone-600">
          Skills 免费开放，AI 工作流与资料包一次买断、终身访问。
        </p>
      </div>

      <div className="card mt-10">
        <h2 className="text-xl font-semibold">包含什么</h2>
        <ul className="mt-4 space-y-2">
          {benefits.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-stone-700">
              <span className="mt-0.5 text-brand">✓</span>
              {b}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <OrderPanel />

        <div className="space-y-4">
          <div className="card">
            <h3 className="font-semibold">关于收款</h3>
            <ul className="mt-3 space-y-2 text-sm text-stone-700">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-brand">•</span>
                当前仅支持微信收款，付款请用左侧「显示微信收款码」。
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-brand">•</span>
                转账备注务必填写你的订单号，方便人工核对后发放卡密。
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-brand">•</span>
                若无时间等待，也可直接用已购卡密在下方激活。
              </li>
            </ul>
          </div>
          <p className="text-xs text-stone-400">
            建议后续升级微信「经营收款码」收款，并在转账备注填写订单号，便于对账与降低风控。
          </p>
        </div>
      </div>

      <div className="mt-8">
        <RedeemForm />
      </div>

      <p className="mt-6 text-center text-xs text-stone-400">
        客服微信：zoey_ai ｜ 付款后发送「订单号 + 购买卡密」获取激活码
      </p>
    </div>
  );
}
