'use client';

import { DashboardLayout } from '@/components/dashboard-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  BookOpen,
  Target,
  TrendingUp,
  Users,
  Calendar,
  BarChart3,
  Zap,
  Globe,
  Download,
  Eye,
  CheckCircle,
  Twitter,
  Coins,
} from 'lucide-react';

export default function StrategyGuide() {
  const strategySections = [
    {
      id: 'executive-summary',
      title: 'Executive Summary',
      content: [
        'Transform @DigitalGold and @LSD_Gold into authoritative dual-voice for tokenized precious metals',
        'Research-informed strategy based on competitive analysis of top performers',
        '@DigitalGold: "Sound Money Rebel" - passionate, accessible, contrarian education',
        '@LSD_Gold: "Institutional Gold Standard" - professional, data-driven, partnership-focused',
        'Target: Market-leading position in $50B tokenized assets space'
      ]
    },
    {
      id: 'voice-strategy',
      title: '@DigitalGold Voice Strategy',
      content: [
        'Core Positioning: High-octane "All Gas No Brakes" authenticity with educational depth',
        'Content Strategy: 40% Market Analysis, 30% Educational Authority, 20% Current Events, 10% Community',
        'Proven Tactics: Gold vs Bitcoin debates (3-8x engagement), Historical precedents (60% higher share)',
        'Daily Schedule: Market Monday, Truth Tuesday, Wisdom Wednesday, Thesis Thursday, Future Friday',
        'Target Growth: 829 → 2,500+ followers by Month 6'
      ]
    },
    {
      id: 'professional-strategy',
      title: '@LSD_Gold Professional Strategy',
      content: [
        'Core Positioning: Institutional-grade authority with collaborative ecosystem building',
        'Content Strategy: 30% Educational Leadership, 25% Product Updates, 25% Thought Leadership, 20% Community',
        'Proven Tactics: Partnership amplification (300% higher reach), Technical threads (60% higher B2B engagement)',
        'Weekly Schedule: Metric Monday, Technical Tuesday, Wisdom Wednesday, Thought Thursday, Future Friday',
        'Target Growth: 62 → 750+ followers by Month 6'
      ]
    },
    {
      id: 'implementation',
      title: 'Implementation Timeline',
      content: [
        'Week 1-2: Voice calibration and launch with distinct positioning',
        'Week 3-4: Engagement acceleration with signature content series',
        'Week 5-6: Authority building with industry recognition targets',
        'Week 7-8: Community scale and cross-brand synergy protocols',
        'Month 2-6: Scale to market leadership with Top 3 positioning'
      ]
    },
    {
      id: 'success-metrics',
      title: 'Success Metrics & KPIs',
      content: [
        '30-Day: 5%+ engagement rate, voice differentiation established',
        '60-Day: 200%+ growth @DigitalGold, 300%+ growth @LSD_Gold',
        '90-Day: Top 15 tokenized gold conversation, 25%+ platform attribution',
        '6-Month: Top 5 market position, 50%+ platform adoption correlation',
        'Authority: 20+ monthly industry mentions, 12+ media features'
      ]
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-amber-500" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Strategy Guide</h1>
              <p className="text-slate-400 text-sm">LSD Dual-Brand X Authority Building Strategy</p>
            </div>
          </div>
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
            READY FOR IMPLEMENTATION
          </Badge>
        </div>

        {/* Strategy Overview */}
        <Card className="bg-gradient-to-r from-amber-500/20 via-amber-600/10 to-amber-500/20 border-amber-500/30">
          <CardContent className="py-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-amber-500/30 flex items-center justify-center">
                  <Target className="w-8 h-8 text-amber-500" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-1">LSD Authority Building Strategy</h2>
                  <p className="text-amber-400 font-medium mb-2">Research-Informed Dual-Brand Framework</p>
                  <div className="flex items-center gap-4 text-sm text-slate-300">
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      Agent Fleet Research
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      Dual-Brand Strategy
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      6-Month Roadmap
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white font-medium">Target Market</p>
                <p className="text-amber-400 text-2xl font-bold">$50B by 2026</p>
                <p className="text-slate-400 text-sm">Tokenized Assets</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Brand Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <Twitter className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="font-medium text-white text-lg">@DigitalGold</p>
                  <p className="text-sm text-slate-400">Personal Brand Authority</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-blue-400 mb-1">"The Sound Money Rebel"</p>
                  <p className="text-xs text-slate-300">Authentic • Contrarian • Educational • All Gas No Brakes</p>
                </div>
                <div className="pt-2 border-t border-slate-700">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <p className="text-slate-400">Current</p>
                      <p className="text-white font-medium">829 followers</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Target (6mo)</p>
                      <p className="text-blue-400 font-medium">2,500+ followers</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <Coins className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="font-medium text-white text-lg">@LSD_Gold</p>
                  <p className="text-sm text-slate-400">Institutional Authority</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-green-400 mb-1">"Institutional Gold Standard"</p>
                  <p className="text-xs text-slate-300">Professional • Data-Driven • Partnership-Focused</p>
                </div>
                <div className="pt-2 border-t border-slate-700">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <p className="text-slate-400">Current</p>
                      <p className="text-white font-medium">62 followers</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Target (6mo)</p>
                      <p className="text-green-400 font-medium">750+ followers</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Strategy Sections */}
        {strategySections.map((section, index) => (
          <Card key={section.id} className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-amber-500/20 flex items-center justify-center text-amber-500 text-sm font-bold">
                  {index + 1}
                </div>
                {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {section.content.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                    <p className="text-sm text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Research Foundation */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-amber-500" />
              Research Foundation
            </CardTitle>
            <CardDescription>
              Strategy based on Agent Fleet competitive intelligence
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-white mb-3">Sound Money Analysis</h4>
                <div className="space-y-2 text-sm text-slate-300">
                  <div>• @PeterSchiff: Consistency builds credibility</div>
                  <div>• @zerohedge: Contrarian positions drive 3-8x engagement</div>
                  <div>• @RealVision: Educational premium validates monetization</div>
                  <div>• Historical content: 60% higher shareability</div>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-white mb-3">Institutional DeFi Analysis</h4>
                <div className="space-y-2 text-sm text-slate-300">
                  <div>• @centrifuge: Partnership content = 300% higher reach</div>
                  <div>• Technical threads: 60% better B2B engagement</div>
                  <div>• Data transparency: 250% better than conceptual</div>
                  <div>• Optimal B2B times: 9-11 AM EST</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Implementation Readiness */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-500" />
              Implementation Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <div>
                  <p className="font-medium text-white text-sm">Research Complete</p>
                  <p className="text-xs text-slate-400">Competitive intelligence</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <div>
                  <p className="font-medium text-white text-sm">Strategy Defined</p>
                  <p className="text-xs text-slate-400">Dual-brand framework</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <div>
                  <p className="font-medium text-white text-sm">Content Calendar</p>
                  <p className="text-xs text-slate-400">Daily schedules ready</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full border-2 border-amber-500 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                </div>
                <div>
                  <p className="font-medium text-white text-sm">Ready to Launch</p>
                  <p className="text-xs text-slate-400">Awaiting approval</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="bg-gradient-to-r from-green-500/20 via-green-600/10 to-green-500/20 border-green-500/30">
          <CardContent className="py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-green-500/30 flex items-center justify-center">
                  <Target className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Ready for Implementation</h3>
                  <p className="text-green-400 font-medium">Complete strategy with research-backed framework</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white font-medium">Timeline</p>
                <p className="text-green-400 text-lg font-bold">Immediate Start</p>
                <p className="text-slate-400 text-sm">6-month roadmap</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}// Deployment test Mon Apr 20 14:49:51 PDT 2026
