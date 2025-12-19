import { Injectable, ForbiddenException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class IssuesService {
  constructor(private prisma: PrismaService) {}

  async create(data, user) {
  if (!data || !data.title) {
    throw new Error('Title is required');
  }

  return this.prisma.issue.create({
    data: {
      title: data.title,
      description: data.description,
      status: 'OPEN',
      organizationId: user.organizationId,
    },
  });
}

  async findAll(user) {
    return this.prisma.issue.findMany({
      where: {
        organizationId: user.organizationId,
      },
    });
  }

  async findOne(id, user) {
    const issue = await this.prisma.issue.findFirst({
      where: {
        id,
        organizationId: user.organizationId,
      },
    });

    if (!issue) throw new NotFoundException('Issue not found');
    return issue;
  }

  async updateIssue(id, data, user) {
    const issue = await this.findOne(id, user);

    if (user.role !== 'ADMIN') {
      throw new ForbiddenException('Only admin can update issue');
    }

    return this.prisma.issue.update({
      where: { id },
      data,
    });
  }

  async delete(id, user) {
    if (user.role !== 'ADMIN') {
      throw new ForbiddenException('Only admin can delete issue');
    }

    return this.prisma.issue.delete({
      where: { id },
    });
  }
}
