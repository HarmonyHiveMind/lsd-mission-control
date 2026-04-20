'use client';

import { useState, useEffect } from 'react';
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
} from 'lucide-react';

export default function StrategyGuide() {
  const [proposalContent, setProposalContent] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load the proposal content
    fetch('/MISSION_CONTROL_PROPOSAL.md')
      .then(response => response.text())
      .then(content => {
        setProposalContent(content);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading proposal:', error);
        setLoading(false);
      });
  }, []);

  const proposalSections = [
    {
      id: 'executive-summary',
      title: 'Executive Summary',
      description: 'Strategic overview and dual-brand framework',
      icon: Target,
      color: 'amber'
    },
    {
      id: 'research-framework',
      title: 'Research-Informed Strategy',
      description: 'Competitive intelligence and success patterns',
      icon: BarChart3,
      color: 'blue'
    },
    {
      id: 'x-strategies',
      title: 'Detailed X Strategies',
      description: '@DigitalGold and @LSD_Gold positioning',
      icon: Users,
      color: 'green'
    },
    {
      id: 'implementation-timeline',
      title: 'Implementation Timelines',
      description: '4-8 week foundation and 3-6 month scale phases',
      icon: Calendar,
      color: 'purple'
    },
    {
      id: 'kpis-okrs',
      title: 'KPIs & OKRs Framework',
      description: 'Comprehensive success measurement',
      icon: TrendingUp,
      color: 'orange'
    },
    {
      id: 'content-calendars',
      title: 'Tactical Content Calendars',
      description: 'Daily and weekly content strategies',
      icon: BookOpen,
      color: 'indigo'
    },
    {
      id: 'synergy-protocols',
      title: 'Cross-Brand Synergy',
      description: 'Complementary positioning framework',
      icon: Zap,
      color: 'yellow'
    },
    {
      id: 'success-measurement',
      title: 'Success Measurement',
      description: 'Performance tracking and optimization',
      icon: CheckCircle,
      color: 'emerald'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      amber: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
      blue: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      green: 'bg-green-500/20 text-green-400 border-green-500/30',
      purple: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      orange: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      indigo: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
      yellow: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      emerald: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    };
    return colorMap[color] || colorMap.amber;
  };

  const getIconColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      amber: 'text-amber-500',
      blue: 'text-blue-500',
      green: 'text-green-500',
      purple: 'text-purple-500',
      orange: 'text-orange-500',
      indigo: 'text-indigo-500',
      yellow: 'text-yellow-500',
      emerald: 'text-emerald-500',
    };
    return colorMap[color] || colorMap.amber;
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-slate-400">Loading Strategy Guide...</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

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
              <p className="text-slate-400 text-sm">Comprehensive LSD X Brand Strategy Proposal</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
              READY FOR IMPLEMENTATION
            </Badge>
            <Button
              variant="outline"
              size="sm"
              className="border-slate-700 text-slate-300 hover:bg-slate-700"
              onClick={() => window.open('/MISSION_CONTROL_PROPOSAL.md', '_blank')}
            >
              <Download className="w-4 h-4 mr-2" />
              View Full Document
            </Button>
          </div>
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
                  <p className="text-amber-400 font-medium mb-2">Dual-Brand Framework for Tokenized Gold Market Leadership</p>
                  <div className="flex items-center gap-4 text-sm text-slate-300">
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      Research-Informed
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

        {/* Key Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="font-medium text-white">@DigitalGold</p>
                  <p className="text-xs text-slate-400">Personal Brand</p>
                </div>
              </div>
              <p className="text-sm text-slate-300 mb-2">"The Sound Money Rebel"</p>
              <p className="text-xs text-blue-400">Authentic • Contrarian • Educational</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="font-medium text-white">@LSD_Gold</p>
                  <p className="text-xs text-slate-400">Corporate Brand</p>
                </div>
              </div>
              <p className="text-sm text-slate-300 mb-2">"Institutional Gold Standard"</p>
              <p className="text-xs text-green-400">Professional • Data-Driven • Partnership-Focused</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="font-medium text-white">Success Target</p>
                  <p className="text-xs text-slate-400">6-Month Goal</p>
                </div>
              </div>
              <p className="text-sm text-slate-300 mb-2">Top 3 Market Position</p>
              <p className="text-xs text-purple-400">50%+ Platform Attribution</p>
            </CardContent>
          </Card>
        </div>

        {/* Strategy Sections Navigation */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-500" />
              Strategy Components
            </CardTitle>
            <CardDescription className="text-slate-400">
              Navigate through the comprehensive strategy proposal sections
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {proposalSections.map((section) => {
                const IconComponent = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="p-4 rounded-lg border border-slate-700 hover:border-slate-600 hover:bg-slate-700/50 transition-all text-left group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-8 h-8 rounded-lg bg-${section.color}-500/20 flex items-center justify-center`}>
                        <IconComponent className={`w-4 h-4 ${getIconColorClasses(section.color)}`} />
                      </div>
                      <h3 className="font-medium text-white text-sm group-hover:text-amber-400 transition-colors">
                        {section.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {section.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Full Proposal Content */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Target className="w-5 h-5 text-amber-500" />
              Complete Strategy Proposal
            </CardTitle>
            <CardDescription className="text-slate-400">
              Comprehensive dual-brand framework based on Agent Fleet competitive research
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-slate-900/50 rounded-lg p-6 max-h-96 overflow-y-auto">
              <pre className="text-sm text-slate-300 whitespace-pre-wrap font-mono leading-relaxed">
                {proposalContent}
              </pre>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Based on weekend Agent Fleet research</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="border-amber-500/30 text-amber-400 hover:bg-amber-500/10"
                onClick={() => window.open('/MISSION_CONTROL_PROPOSAL.md', '_blank')}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Full Proposal
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Implementation Status */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-500" />
              Implementation Readiness
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <div>
                  <p className="font-medium text-white">Research Complete</p>
                  <p className="text-xs text-slate-400">Agent Fleet competitive intelligence</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <div>
                  <p className="font-medium text-white">Strategy Defined</p>
                  <p className="text-xs text-slate-400">Dual-brand framework established</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full border-2 border-amber-500 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                </div>
                <div>
                  <p className="font-medium text-white">Ready to Launch</p>
                  <p className="text-xs text-slate-400">Awaiting implementation approval</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}